import * as Blockly from 'node-blockly/browser';
import {Template} from 'meteor/templating';
import WorkspaceUtils from './WorkspaceUtils';

// TODO: Look at https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gj4w2c for inspiration for blocks

var workspace = null;

Template.cardEditor.onRendered(function () {
    if (workspace !== null) {
        throw new Meteor.Error('There can only be 1 Blockly workspace at a time.');
    }

    // This gets executed when injection DOM (blocklyDiv element) is ready.
    // See the Blaze API to understand how templates work.
    var blocklyArea = document.getElementById('blocklyArea');
    var blocklyDiv = document.getElementById('blocklyDiv');
    workspace = Blockly.inject(blocklyDiv,
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
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspace);

    var rootBlock = workspace.newBlock('carddesc');
    rootBlock.initSvg();
    rootBlock.render();
    rootBlock.setMovable(true);
    rootBlock.setDeletable(false);
    //console.log(rootBlock.toString());

    // TODO: If a spell is added as a statement to MetaSpell, which takes an array of spells,
    // TODO: give that spell block a bottom output (this.SetNextStatement(true, "spell"))
    var makeBlockStackable = function(event) {
        if(event.type == Blockly.Events.MOVE) {
            if (event.newInputName == "spells") {
                let block = workspace.getBlockById(event.blockId);
                block.setNextStatement(true, "spell");
            }
            if(workspace.getBlockById(event.oldParentId).type == "MetaSpell") {
                let block = workspace.getBlockById(event.blockId);
                block.setNextStatement(false);
            }
        }
    }

    workspace.addChangeListener(makeBlockStackable);
});

Template.cardEditor.onDestroyed(function () {
    if (workspace != null) {
        workspace.dispose();
        workspace = null;
    }
});

Template.cardEditorNavbar.events({
    'click #navbar-button-1': function () {
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var dictionary = WorkspaceUtils.xmlToDictionary(xml);

        console.log(WorkspaceUtils.workspaceToDictionary(workspace));
    },
    'click #navbar-link-1': function () {
        alert('link clicked');
    }
});

Meteor.startup(function () {
    // This gets executed before templates are rendered but after the DOM is ready and all the scripts are ready.
});