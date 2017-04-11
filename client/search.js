/**
 * Created by chiyoung on 2/10/17.
 */
import Blocks from "./blocks.js";
import * as Blockly from 'node-blockly/browser';
import {Template} from 'meteor/templating';
import WorkspaceUtils from './WorkspaceUtils';
import {CurrentWorkspace} from './cardeditor';

Template.search.onRendered(function() {
    this.blocksDict = new ReactiveDict();
    this.blocksDict.set('blocksList',[]);
});

Template.search.events({
    'keyup': function (event, template) {
        let key = event.currentTarget.value;
        let blocks = {};
        let blocksList = [];
        for (BlocklyBlock in Blockly.Blocks) {
            if(BlocklyBlock.toLowerCase().indexOf(key.toLowerCase())>-1) {
                blocks[BlocklyBlock] = Blockly.Blocks[BlocklyBlock];
            }
        }
        Object.keys(blocks).forEach(function(element, index, array){
            blocks[element].key = element;
            blocksList.push(blocks[element]);
        });
        template.blocksDict.set('blocksList', blocksList);
        console.log(template.blocksDict.get('blocksList'));
    }

});

Template.search.helpers({
    blocks: function() {
        return[{"key":"abc"},{"key":"def"},{"key":"ghi"}];//return Template.instance().blocksDict.get('blocksList');//return {"key":"kek"};
    }
    //blocks: function() {
    //    return Template.instance().blocksDict.get('blocksList');
    //},
});