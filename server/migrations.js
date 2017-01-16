/**
 * Created by bberman on 1/16/17.
 */
import {CardCatalogue} from './CardCatalogue';

Migrations.add({
    name: 'Load cards database',
    version: 1,
    up() {
        CardCatalogue.loadCardsFromMetastone();
    }
});

Meteor.startup(function () {
    Migrations.migrateTo('latest');
});
