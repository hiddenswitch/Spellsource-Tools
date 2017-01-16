/**
 * Created by chris on 1/6/17.
 */
import * as Blockly from 'node-blockly/browser';

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