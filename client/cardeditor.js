import * as Blockly from 'node-blockly/browser';
import {Template} from 'meteor/templating'

// TODO: Look at https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gj4w2c for inspiration for blocks

Template.cardEditor.onRendered(function () {
    // This gets executed when injection DOM (blocklyDiv element) is ready.
    // See the Blaze API to understand how templates work.
    var instance = this;
    var workspace = Blockly.inject('blocklyDiv',
        {toolbox: document.getElementById('toolbox')});
});

Meteor.startup(function () {
    // This gets executed before templates are rendered but after the DOM is ready and all the scripts are ready.
});