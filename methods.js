/**
 * Created by bberman on 1/16/17.
 */

export const updateCard = {
    name: 'updateCard',

    // // Factor out validation so that it can be run independently (1)
    // validate(args) {
    //     new SimpleSchema({
    //         todoId: { type: String },
    //         newText: { type: String }
    //     }).validate(args)
    // },

    // Factor out Method body so that it can be called independently (3)
    run({cardId, update}) {
        Cards.update(cardId, update);
    },

    // Call Method by referencing the JS object (4)
    // Also, this lets us specify Meteor.apply options once in
    // the Method implementation, rather than requiring the caller
    // to specify it at the call site.
    call(args, callback) {
        const options = {
            returnStubValue: true,     // (5)
            throwStubExceptions: true  // (6)
        };

        Meteor.apply(this.name, [args], options, callback);
    }
};

// Actually register the method with Meteor's DDP system
Meteor.methods({
    [updateCard.name]: function (args) {
        updateCard.run.call(this, args);
    }
});