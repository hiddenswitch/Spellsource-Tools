import * as Blockly from 'node-blockly/browser';
import {Template} from 'meteor/templating';

// TODO: Look at https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gj4w2c for inspiration for blocks

Template.cardEditor.onRendered(function () {
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

    xml = Blockly.Xml.workspaceToDom(workspace);
    xml_text = Blockly.Xml.domToPrettyText(xml);
    jsonText = JSON.stringify(xmlToJson(xml));
    console.log(xml);
    console.log(xml_text);
    console.log(jsonText);

    console.log(getJSON());


});

Meteor.startup(function () {
    // This gets executed before templates are rendered but after the DOM is ready and all the scripts are ready.

});

Blockly.JSON = new Blockly.Generator('JSON');


Blockly.JSON.fromWorkspace = function(workspace) {

    var json_text = '';

    var top_blocks = workspace.getTopBlocks(false);
    for(var i in top_blocks) {
        var top_block = top_blocks[i];

        if(top_block.type == 'start') {
            var json_structure = this.generalBlockToObj( top_block );

            json_text += JSON.stringify(json_structure, null, 4) + '\n\n';
        }
    }
    console.log(json_text);
    return json_text;
};

function getJSON()
{
    Blockly.JSON.fromWorkspace(workspace);
}

// Changes XML to JSON
function xmlToJson(xml) {

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
        for(var i = 0; i < xml.childNodes.length; i++) {
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

updateWorkspace = function()
{
    xml = Blockly.Xml.workspaceToDom(workspace);
    jsonText = JSON.stringify(xmlToJson(xml));
    console.log(jsonText);
}

/*
{"BLOCK":
    {"@attributes":
        {"type":"carddesc",
            "id":"sbuFQ)e]#Mw1J4:Iy~kD",
            "deletable":"false",
            "x":"0",
            "y":"0"},
        "FIELD":[{"@attributes":
        {"name":"id"},
        "#text":"id"},
        {"@attributes":
            {"name":"name"},
            "#text":"name"},
        {"@attributes":
            {"name":"description"},
            "#text":"description"},
        {"@attributes":
            {"name":"HeroClass"},
            "#text":"ANY"},
        {"@attributes":
            {"name":"Rarity"},
            "#text":"FREE"},
        {"@attributes":
            {"name":"baseManaCost"},
            "#text":"0"},
        {"@attributes":
            {"name":"collectible"},
            "#text":"TRUE"}]}}
*/


