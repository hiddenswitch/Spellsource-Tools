/**
 * Created by chris on 1/6/17.
 */
import * as Blockly from 'node-blockly/browser';


Blockly.JavaScript['page_settings'] = function (block) {
    var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
    var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background = Blockly.JavaScript.valueToCode(block, 'page_background', Blockly.JavaScript.ORDER_ATOMIC);
    var value_paragraph = Blockly.JavaScript.valueToCode(block, 'page_paragraph', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'document.body.style.color = "' + value_color + '";\n';
    code += 'document.body.style.backgroundColor = "' + value_background + '";\n';
    code += 'document.getElementById("description").innerHTML = "' + value_paragraph + '";\n';
    code += statements_page_header;
    return code;
};

Blockly.JavaScript['page_header'] = function (block) {
    var value_header_text = Blockly.JavaScript.valueToCode(block, 'header_text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'document.getElementById("header").innerHTML = "' + value_header_text + '";\n';
    code += 'document.getElementById("header").style.color = "' + value_color + '";\n';
    return code;
};

Blockly.JavaScript['color_blue'] = function (block) {
    var colour_blue = block.getFieldValue('blue');

    var code = '#3333FF';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_red'] = function (block) {
    var colour_red = block.getFieldValue('red');

    var code = '#FF3333';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_green'] = function (block) {
    var colour_green = block.getFieldValue('green');

    var code = '#33FF33';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_black'] = function (block) {
    var colour_black = block.getFieldValue('black');

    var code = '#000000';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_white'] = function (block) {
    var colour_white = block.getFieldValue('white');

    var code = '#FFFFFF';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['page_text'] = function (block) {
    var text_text = block.getFieldValue('page_text');

    var code = text_text;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['string_length'] = {
    init: function () {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
};

Blockly.JavaScript['minioncarddesc'] = function (block) {
    var text_id = block.getFieldValue('id');
    var text_name = block.getFieldValue('name');
    var dropdown_heroclass = block.getFieldValue('heroClass');
    var text_description = block.getFieldValue('description');
    var dropdown_rarity = block.getFieldValue('rarity');
    var dropdown_set = block.getFieldValue('set');
    var checkbox_collectible = block.getFieldValue('collectible') == 'TRUE';
    var number_basemanacost = block.getFieldValue('baseManaCost');
    var number_baseattack = block.getFieldValue('baseAttack');
    var number_basehp = block.getFieldValue('baseHp');
    var dropdown_race = block.getFieldValue('race');
    var value_passivetrigger = Blockly.JavaScript.valueToCode(block, 'passiveTrigger', Blockly.JavaScript.ORDER_ATOMIC);
    var value_decktrigger = Blockly.JavaScript.valueToCode(block, 'deckTrigger', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_battlecry = Blockly.JavaScript.statementToCode(block, 'battlecry');
    var statements_deathrattle = Blockly.JavaScript.statementToCode(block, 'deathrattle');
    var statements_triggers = Blockly.JavaScript.statementToCode(block, 'triggers');
    var statements_attributes = Blockly.JavaScript.statementToCode(block, 'attributes');
    var value_aura = Blockly.JavaScript.valueToCode(block, 'aura', Blockly.JavaScript.ORDER_ATOMIC);
    var value_cardcostmodifier = Blockly.JavaScript.valueToCode(block, 'cardCostModifier', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("minioncarddesc").innerHTML = "' + statements_battlecry + '";\n';
    //var code = '...;\n';
    return code;
};

Blockly.JavaScript['damagespelldesc'] = function (block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var value_filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_target = block.getFieldValue('target');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("damagespelldesc").innerHTML = "' + value_value + '";\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['battlecrydesc'] = function (block) {
    var dropdown_targetselection = block.getFieldValue('targetSelection');
    var value_spell = Blockly.JavaScript.valueToCode(block, 'spell', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("battlecrydesc").innerHTML = "' + value_spell + '";\n';
    return code;
};

Blockly.JavaScript['minion'] = function (block) {
    var text_id = block.getFieldValue('id');
    var text_name = block.getFieldValue('name');
    var text_description = block.getFieldValue('description');
    var text_basemanacost = block.getFieldValue('baseManaCost');
    var text_baseattack = block.getFieldValue('baseAttack');
    var text_basehp = block.getFieldValue('baseHp');
    var dropdown_race = block.getFieldValue('race');
    var statements_battlecry = Blockly.JavaScript.statementToCode(block, 'battlecry');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("minion").innerHTML = "' + value_battlecry + '";\n';
    return code;
};

Blockly.JavaScript['weapon'] = function (block) {
    var text_damage = block.getFieldValue('damage');
    var text_durability = block.getFieldValue('durability');
    var statements_onequip = Blockly.JavaScript.statementToCode(block, 'onEquip');
    var statements_onunequip = Blockly.JavaScript.statementToCode(block, 'onUnequip');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("weapon").innerHTML = "' + statements_onequip + '";\n';
    return code;
};

Blockly.JavaScript['carddesc'] = function (block) {
    var text_id = block.getFieldValue('id');
    var text_name = block.getFieldValue('name');
    var text_description = block.getFieldValue('description');
    var dropdown_heroclass = block.getFieldValue('HeroClass');
    var dropdown_rarity = block.getFieldValue('Rarity');
    var text_basemanacost = block.getFieldValue('baseManaCost');
    var checkbox_collectible = block.getFieldValue('collectible') == 'TRUE';
    var statements_attributes = Blockly.JavaScript.statementToCode(block, 'Attributes');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("carddesc").innerHTML = "' + statements_attributes + '";\n';
    return code;
};