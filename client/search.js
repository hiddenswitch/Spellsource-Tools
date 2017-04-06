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
    this.blocksDict.set('categoriesList', []);
    this.blocksDict.set('showList', []);
});

Template.search.onRendered(function () {
    document.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'none';

    let categories = $('category');
    let listToggle = {};
    for (let i = 0; i < categories.length; i++) {
        let key = categories[i].getAttribute('name');
        if (key == "Others") {
            key = "Other";
        }
        listToggle[key] = true;
    }
    this.blocksDict.set('showList', listToggle);
    //console.log(this.blocksDict.get('showList'));


    let categoriesDict = {};
    let categoriesList = [];
    for (let i = 0; i < categories.length; i++) {
        let key = categories[i].getAttribute('name');
        for (let j = 0; j < categories[i].children.length; j++) {
            categoriesDict[categories[i].children[j].getAttribute('type')] = key;
        }
    }
    this.blocksDict.set('categoriesList', categoriesDict);


    let key = "";
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

    blocksCategory = this.blocksDict.get('categoriesList');

    Object.keys(blocks).forEach(function (element, index, array) {
        blocks[element].key = element;
        blocks[element].type = blocksCategory[element];
        blocksList.push(blocks[element]);
    });
    this.blocksDict.set('blocksList', blocksList);
    //console.log(this.blocksDict.get('blocksList'));
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

        blocksCategory = template.blocksDict.get('categoriesList');

        Object.keys(blocks).forEach(function (element, index, array) {
            blocks[element].key = element;
            blocks[element].type = blocksCategory[element];
            blocksList.push(blocks[element]);
        });
        template.blocksDict.set('blocksList', blocksList);
        //console.log(template.blocksDict.get('blocksList'));
    },

    'click .block': function (event, template) {
        let blockName = event.target.innerText;
        //console.log(blockName);
        let rootBlock = CurrentWorkspace.newBlock(blockName);
        rootBlock.initSvg();
        rootBlock.render();
        rootBlock.setMovable(true);
        rootBlock.setDeletable(true);
    },

    'click .categoryHeader': function (event, template) {
        let category = event.target.innerText;
        if (category == "Others") {
            category = "Other";
        }
        let show = template.blocksDict.get('showList');
        show[category] = !show[category];
        template.blocksDict.set('showList',show);
    }
});

Template.search.helpers({
    blocks: function () {
        let template = Template.instance();
        if (template.blocksDict.get('blocksList')) {
            return template.blocksDict.get('blocksList');
        }
        else {
            return [];
        }

    },

    filteredBlocks: function(type) {
        let template = Template.instance();
        if (template.blocksDict.get('blocksList')) {
            let blocksList = [];
            let blocksDict = template.blocksDict.get('blocksList');
            for (element in blocksDict) {
                if (blocksDict[element].type == type) {

                    blocksList.push(blocksDict[element]);
                }
            }
            return blocksList;
        }
        else {
            return [];
        }
    },

    selected: function(type) {
        let template = Template.instance();
        if (type == "Others") {
            type = "Other";
        }
        return template.blocksDict.get('showList')[type];
    },

    exists: function(type) {
        let template = Template.instance();
        let blocksDict = template.blocksDict.get('blocksList');
        if (type == "Others") {
            type = "Other";
        }
        for (element in blocksDict) {
            if (blocksDict[element].type == type) {
                return true;
            }
        }
        return false;
    }
    //return[{"key":"abc"},{"key":"def"},{"key":"ghi"}];
    //blocks: function() {
    //    return Template.instance().blocksDict.get('blocksList');
    //},
});