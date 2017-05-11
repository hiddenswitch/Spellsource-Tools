import * as Blockly from 'node-blockly/browser';
import {Template} from 'meteor/templating';
import WorkspaceUtils from './WorkspaceUtils';
import {Tracker} from 'meteor/tracker';

// TODO: Look at https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gj4w2c for inspiration for blocks

export let CurrentWorkspace = null;

Template.cardEditor.onCreated(function () {
    let instance = Template.instance();
    instance.codeDependency = new Tracker.Dependency();
});

Template.cardEditor.onRendered(function () {
    if (CurrentWorkspace !== null) {
        throw new Meteor.Error('There can only be 1 Blockly CurrentWorkspace at a time.');
    }

    // This gets executed when injection DOM (blocklyDiv element) is ready.
    // See the Blaze API to understand how templates work.
    var blocklyArea = document.getElementById('blocklyArea');
    var blocklyDiv = document.getElementById('blocklyDiv');
    CurrentWorkspace = Blockly.inject(blocklyDiv,
        {toolbox: document.getElementById('toolbox')});

    var onresize = function (e) {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    };

    // Set up resize handlers
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(CurrentWorkspace);

    // Create a default block
    var rootBlock = CurrentWorkspace.newBlock('carddesc');
    rootBlock.initSvg();
    rootBlock.render();
    rootBlock.setMovable(true);
    rootBlock.setDeletable(false);
    var instance = Template.instance();
    // Configure a change listener to update the code text
    CurrentWorkspace.addChangeListener(() => {
        instance.codeDependency.changed();
    });
});

Template.cardEditor.onDestroyed(function () {
    if (CurrentWorkspace != null) {
        CurrentWorkspace.dispose();
        CurrentWorkspace = null;
    }
});

Template.cardEditor.helpers({
    blocklyCode() {
        let instance = Template.instance();
        instance.codeDependency.depend();

        if (CurrentWorkspace == null) {
            return;
        }

        var xml = Blockly.Xml.workspaceToDom(CurrentWorkspace);
        return JSON.stringify(WorkspaceUtils.workspaceToDictionary(CurrentWorkspace), null, '  ');
    }
});

Meteor.startup(function () {
    // This gets executed before templates are rendered but after the DOM is ready and all the scripts are ready.
});
