import * as Blockly from 'node-blockly/browser';
import {Template} from 'meteor/templating'

// TODO: Look at https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gj4w2c for inspiration for blocks

Template.cardEditor.onRendered(function () {
    // This gets executed when injection DOM (blocklyDiv element) is ready.
    // See the Blaze API to understand how templates work.
    var blocklyArea = document.getElementById('blocklyArea');
    var blocklyDiv = document.getElementById('blocklyDiv');
    var workspace = Blockly.inject(blocklyDiv,
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

    var rootBlock = Blockly.Block.obtain(Blockly.mainWorkspace, 'carddesc');
    rootBlock.initSvg();
    rootBlock.render();
    rootBlock.setMovable(true);
    rootBlock.setDeletable(false);
});

Meteor.startup(function () {
    // This gets executed before templates are rendered but after the DOM is ready and all the scripts are ready.

});
