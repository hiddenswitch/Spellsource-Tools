/**
 * Created by bberman on 1/16/17.
 */

Meteor.publish('cards', function (query, options) {
    Counts.publish(this, 'cards-count', Cards.find(query, options));
    return Cards.find(query, options);
});