/**
 * Created by chiyoung on 2/10/17.
 */
import Blocks from "./blocks.js";
import * as Blockly from 'node-blockly/browser';
import {Template} from 'meteor/templating';
import WorkspaceUtils from './WorkspaceUtils';
import {CurrentWorkspace} from './cardeditor';

Template.search.onCreated(function () {
    this.blocksDict = new ReactiveDict();
    this.blocksDict.set('blocksList', []);
});

Template.search.events({
    'keyup': function (event, template) {
        let key = event.currentTarget.value;
        let blocks = {};
        let blocksList = [];
        for (let BlocklyBlock in Blockly.Blocks) {
            if (BlocklyBlock.toLowerCase().indexOf(key.toLowerCase()) > -1) {
                if (BlocklyBlock[0] == BlocklyBlock[0].toUpperCase())
                {
                    blocks[BlocklyBlock] = Blockly.Blocks[BlocklyBlock];
                }

            }
        }
        Object.keys(blocks).forEach(function (element, index, array) {
            blocks[element].key = element;
            blocksList.push(blocks[element]);
        });
        template.blocksDict.set('blocksList', blocksList);
        console.log(template.blocksDict.get('blocksList'));
    },

    'click .block': function (event, template) {
        let blockName = event.target.innerText;
        console.log(blockName);
        let rootBlock = CurrentWorkspace.newBlock(blockName);
        rootBlock.initSvg();
        rootBlock.render();
        rootBlock.setMovable(true);
        rootBlock.setDeletable(true);
    }
});

Template.search.helpers({
    blocks: function () {
        let template = Template.instance();
        if (template.blocksDict.get('blocksList')) {
            return template.blocksDict.get('blocksList');
        }
        else {
            return [{"key": "GraveyardCountCondition"}];
        }

    }
    //return[{"key":"abc"},{"key":"def"},{"key":"ghi"}];
    //blocks: function() {
    //    return Template.instance().blocksDict.get('blocksList');
    //},
});