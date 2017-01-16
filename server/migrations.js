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

Migrations.add({
    name: 'Add indices to Cards database',
    version: 2,
    up() {
        Cards._ensureIndex({'gameDefinition.name': 1});
        Cards._ensureIndex({'gameDefinition.description': "text"});
    }
});

Meteor.startup(function () {
    Migrations.migrateTo('latest');
});
