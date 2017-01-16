/**
 * Created by bberman on 1/16/17.
 */
import {Download} from 'node-curl-download';
import fs from "fs";
import extract from "extract-zip";
import walk from "walk";

export class CardCatalogue {
    static loadCardsFromMetastone() {
        const url = 'https://github.com/hiddenswitch/metastone/archive/master.zip';
        const migrationsMaster = '/tmp/migrations-master.zip';
        const destinationDirectory = '/tmp';
        const cardsPath = '/tmp/metastone-master/cards/src/main/resources/cards';
        const download = new Download(url, migrationsMaster);
        const waitUntilDownloaded = Meteor.wrapAsync((callback) => {
            download.on('end', Meteor.bindEnvironment((code) => {
                callback(null, code === 0);
            }));
        });

        download.start();

        const isDownloaded = waitUntilDownloaded();

        if (!isDownloaded) {
            throw new Meteor.Error('Could not download the metastone zip file. Do you have CURL installed?');
        }

        const waitUntilExtracted = Meteor.wrapAsync(extract);

        waitUntilExtracted(migrationsMaster, {dir: destinationDirectory});
        // Walk the directory tree for JSON files and insert everything

        const waitUntilWalked = Meteor.wrapAsync((callback) => {
            const walker = walk.walk(cardsPath);

            walker.on('file', Meteor.bindEnvironment((root, fileStats, done) => {
                const fileName = fileStats.name;
                const path = root + '/' + fileName;
                const isJSON = /\.json$/.test(path);

                if (!isJSON) {
                    done();
                    return;
                }

                fs.readFile(path, Meteor.bindEnvironment((err, dataBuffer) => {
                    if (err) {
                        console.error(err);
                        done();
                        return;
                    }

                    try {
                        const metastoneCard = JSON.parse(dataBuffer.toString());

                        // Currently, metastone upstream creates cards without IDs. They use the filename with the json
                        // extension stripped as the ID.
                        if (!metastoneCard.id) {
                            metastoneCard.id = fileName.replace(/\.json/, '');
                        }

                        Cards.upsert({
                            _id: metastoneCard.id
                        }, {
                            $set: {gameDefinition: metastoneCard}
                        }, done);
                    } catch (e) {
                        // TODO: Fix the logging situation here
                        console.error(e);
                        console.error(dataBuffer.toString());
                        done();
                    }
                }));
            }));

            walker.on('end', Meteor.bindEnvironment(() => {
                callback(null, null);
            }));
        });

        waitUntilWalked();
    }
}