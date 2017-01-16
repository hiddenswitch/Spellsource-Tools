import * as Blockly from 'node-blockly/browser';
import {Template} from 'meteor/templating';

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
    console.log(rootBlock.toString());
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
        var xmlText = Blockly.Xml.domToPrettyText(xml);
        var jsonText = JSON.stringify(xmlToJson(xml));

        console.log(xml);
        console.log(xmlText);
        console.log(jsonText);

        workspaceToJSON();
    },
    'click #navbar-link-1': function () {
        alert('link clicked');
    }
});

Meteor.startup(function () {
    // This gets executed before templates are rendered but after the DOM is ready and all the scripts are ready.
});

// Changes XML to JSON
var xmlToJson = function (xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};

var workspaceToJSON = function ()
{
    var blocks = workspace.getTopBlocks(true);
    console.log(blocks);
    blocks.forEach(function(block)
    {
        console.log(block.toString(), "--");
        console.log("Id:" , block.getField("id"));
        console.log("Id value: " , block.getFieldValue("id") , ";");
        var children = block.getChildren();
        children.forEach(function(child)
        {
            console.log(child.toString() , "...");

        })

    })
}