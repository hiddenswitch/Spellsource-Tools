/**
 * Created by bberman on 1/10/17.
 */

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    name: 'home',
    action(params, queryParams) {
        BlazeLayout.render("mainLayout", {content: "home"});
    }
});

FlowRouter.route('/editor', {
    name: 'editor',
    action(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'cardEditor', overlay: 'blocklyOverlay', navbar: 'cardEditorNavbar'})
    }
});

FlowRouter.route('/cards', {
    name: 'cards',
    action(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'cards'});
    }
});