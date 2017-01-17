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

Blockly.JavaScript['battlecrydesc'] = function(block) {
    var statements_spell = Blockly.JavaScript.statementToCode(block, 'spell');
    var dropdown_targetselection = block.getFieldValue('TargetSelection');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("battlecrydesc").innerHTML = "' + dropdown_targetselection + '";\n';
    return code;
};

Blockly.JavaScript['minioncarddesc'] = function(block) {
    var number_baseattack = block.getFieldValue('baseAttack');
    var text_baseattack = block.getFieldValue('baseAttack');
    var number_basehp = block.getFieldValue('baseHp');
    var text_basehp = block.getFieldValue('baseHp');
    var dropdown_race = block.getFieldValue('race');
    var statements_battlecrydesc = Blockly.JavaScript.statementToCode(block, 'battlecrydesc');
    var statements_spelldesc = Blockly.JavaScript.statementToCode(block, 'spelldesc');
    var statements_triggerdesc = Blockly.JavaScript.statementToCode(block, 'triggerdesc');
    var statements_triggerdesc__ = Blockly.JavaScript.statementToCode(block, 'triggerdesc[]');
    var statements_auradesc = Blockly.JavaScript.statementToCode(block, 'auradesc');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("minion").innerHTML = "' + statements_auradesc + '";\n';
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

Blockly.JavaScript['carddesc'] = function(block) {
    var text_id = block.getFieldValue('id');
    var text_name = block.getFieldValue('name');
    var text_description = block.getFieldValue('description');
    var dropdown_heroclass = block.getFieldValue('HeroClass');
    var dropdown_rarity = block.getFieldValue('Rarity');
    var dropdown_set = block.getFieldValue('set');
    var number_basemanacost = block.getFieldValue('baseManaCost');
    var text_basemanacost = block.getFieldValue('baseManaCost');
    var checkbox_collectible = block.getFieldValue('collectible') == 'TRUE';
    var statements_attributes = Blockly.JavaScript.statementToCode(block, 'Attributes');
    var number_fileformatversion = block.getFieldValue('fileFormatVersion');
    var text_fileformatversion = block.getFieldValue('fileFormatVersion');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("carddesc").innerHTML = "' + statements_attributes + '";\n';
    return code;
};

Blockly.JavaScript['herocarddesc'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var dropdown_race = block.getFieldValue('Race');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("herocarddesc").innerHTML = "' + dropdown_race + '";\n';
    return code;
};

Blockly.JavaScript['spell'] = function(block) {
    var dropdown_targetselection = block.getFieldValue('TargetSelection');
    var text_spell = block.getFieldValue('spell');
    var text_condition = block.getFieldValue('condition');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("spell").innerHTML = "' + text_condition + '";\n';
    return code;
};

Blockly.JavaScript['heropower'] = function(block) {
    var text_options = block.getFieldValue('options');
    var text_bothoptions = block.getFieldValue('bothOptions');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("spell").innerHTML = "' + text_bothoptions + '";\n';
    return code;
};

Blockly.JavaScript['chooseonecarddesc'] = function(block) {
    var text_options = block.getFieldValue('options');
    var text_bothoptions = block.getFieldValue('bothOptions');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("spell").innerHTML = "' + text_bothoptions + '";\n';
    return code;
};

Blockly.JavaScript['damagespelldesc'] = function(block) {
    var text_value = block.getFieldValue('value');
    var statements_filter = Blockly.JavaScript.statementToCode(block, 'filter');
    var text_target = block.getFieldValue('target');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementByType("spell").innerHTML = "' + text_target + '";\n';
    return code;
};