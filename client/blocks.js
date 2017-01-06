/**
 * Created by chris on 1/6/17.
 */
import * as Blockly from 'node-blockly/browser';

Blockly.Blocks['page_settings'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(120);
        this.appendStatementInput("page_header")
            .appendField("Header:");
        this.appendValueInput("page_color")
            .setCheck("color")
            .appendField("Text Color:");
        this.appendValueInput("page_background")
            .setCheck("color")
            .appendField("Background Color:");
        this.appendValueInput("page_paragraph")
            .setCheck("String")
            .appendField("Paragraph:");
        this.setTooltip('');
    }
};

Blockly.Blocks['page_header'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(240);
        this.appendValueInput("header_text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header Text:");
        this.appendValueInput("page_color")
            .setCheck("color")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Color:");
        this.setPreviousStatement(true, "page_settings");
        this.setTooltip('');
    }
};

Blockly.Blocks['page_text'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(300);
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("Your text."), "page_text");
        this.setOutput(true, "String");
        this.setTooltip('');
    }
};

Blockly.Blocks['color_blue'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(60);
        this.appendDummyInput()
            .appendField("Blue:")
            .appendField(new Blockly.FieldColour("#3333ff"), "blue");
        this.setOutput(true, "color");
        this.setTooltip('');
    }
};

Blockly.Blocks['color_red'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(60);
        this.appendDummyInput()
            .appendField("Red:")
            .appendField(new Blockly.FieldColour("#ff3333"), "red");
        this.setOutput(true, "color");
        this.setTooltip('');
    }
};

Blockly.Blocks['color_green'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(60);
        this.appendDummyInput()
            .appendField("Green:")
            .appendField(new Blockly.FieldColour("#33ff33"), "green");
        this.setOutput(true, "color");
        this.setTooltip('');
    }
};

Blockly.Blocks['color_black'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(60);
        this.appendDummyInput()
            .appendField("Black:")
            .appendField(new Blockly.FieldColour("#000000"), "black");
        this.setOutput(true, "color");
        this.setTooltip('');
    }
};

Blockly.Blocks['color_white'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(60);
        this.appendDummyInput()
            .appendField("White:")
            .appendField(new Blockly.FieldColour("#ffffff"), "white");
        this.setOutput(true, "color");
        this.setTooltip('');
    }
};

Blockly.JavaScript['text_length'] = function (block) {
    // String or array length.
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
            Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
    return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['minioncarddesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Type:")
            .appendField("MINION");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(new Blockly.FieldTextInput("name"), "name")
            .appendField(new Blockly.FieldDropdown([["ANY", "ANY"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "heroClass");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("description"), "description");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["COMMON", "COMMON"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "rarity")
            .appendField(new Blockly.FieldDropdown([["BASIC", "BASIC"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "set")
            .appendField("collectible")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "collectible");
        this.appendDummyInput()
            .appendField("baseManaCost")
            .appendField(new Blockly.FieldNumber(0, 0, 30), "baseManaCost");
        this.appendDummyInput()
            .appendField("baseAttack")
            .appendField(new Blockly.FieldNumber(0, 0, 31), "baseAttack")
            .appendField("baseHp")
            .appendField(new Blockly.FieldNumber(0, 1, 31), "baseHp")
            .appendField("race")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "race");
        this.appendValueInput("passiveTrigger")
            .setCheck("TriggerDesc")
            .appendField("passiveTrigger");
        this.appendValueInput("deckTrigger")
            .setCheck("TriggerDesc")
            .appendField("deckTrigger");
        this.appendStatementInput("battlecry")
            .setCheck("BattlecryDesc")
            .appendField("battlecry");
        this.appendStatementInput("deathrattle")
            .setCheck("SpellDesc")
            .appendField("deathrattle");
        this.appendStatementInput("triggers")
            .setCheck("TriggerDesc")
            .appendField("triggers");
        this.appendStatementInput("attributes")
            .setCheck("Attribute")
            .appendField("attributes");
        this.appendValueInput("aura")
            .setCheck("AuraDesc")
            .appendField("aura");
        this.appendValueInput("cardCostModifier")
            .setCheck("CardCostModifierDesc")
            .appendField("cardCostModifier");
        this.setInputsInline(false);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['damagespelldesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DamageSpellDesc");
        this.appendValueInput("value")
            .setCheck("Number")
            .appendField("value");
        this.appendValueInput("filter")
            .setCheck("filter")
            .appendField("filter");
        this.appendDummyInput()
            .appendField("target")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "target");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['battlecrydesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("BattlecryDesc");
        this.appendDummyInput()
            .appendField("targetSelection")
            .appendField(new Blockly.FieldDropdown([["ANY", "ANY"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "targetSelection");
        this.appendStatementInput("spell")
            .setCheck("DamageSpellDesc")
            .appendField("spell");
        this.setInputsInline(false);
        this.setPreviousStatement(true, "minion");
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['minion'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("MINION");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(new Blockly.FieldTextInput("name"), "name");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("description"), "description");
        this.appendDummyInput()
            .appendField("baseManaCost")
            .appendField(new Blockly.FieldTextInput("0"), "baseManaCost");
        this.appendDummyInput()
            .appendField("baseAttack")
            .appendField(new Blockly.FieldTextInput("0"), "baseAttack")
            .appendField("baseHp")
            .appendField(new Blockly.FieldTextInput("0"), "baseHp");
        this.appendDummyInput()
            .appendField("race")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["BEAST", "BEAST"], ["MURLOC", "MURLOC"], ["PIRATE", "PIRATE"], ["DEMON", "DEMON"], ["DRAGON", "DRAGON"], ["TOTEM", "TOTEM"], ["MECH", "MECH"]]), "race");
        this.appendStatementInput("battlecry")
            .setCheck(null)
            .appendField("battlecry");
        this.setInputsInline(false);
        this.setPreviousStatement(true, "carddesc");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['weapon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Type: WEAPON");
        this.appendDummyInput()
            .appendField("damage")
            .appendField(new Blockly.FieldTextInput("0"), "damage");
        this.appendDummyInput()
            .appendField("durability")
            .appendField(new Blockly.FieldTextInput("0"), "durability");
        this.appendStatementInput("onEquip")
            .setCheck("SpellDesc")
            .appendField("onEquip");
        this.appendStatementInput("onUnequip")
            .setCheck("SpellDesc")
            .appendField("onUnequip");
        this.setInputsInline(false);
        this.setPreviousStatement(true, "carddesc");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['carddesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(new Blockly.FieldTextInput("name"), "name");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("description"), "description");
        this.appendDummyInput()
            .appendField("HeroClass")
            .appendField(new Blockly.FieldDropdown([["ANY", "ANY"], ["DECK_COLLECTION", "DECK_COLLECTION"], ["NEUTRAL", "NEUTRAL"], ["DRUID", "DRUID"], ["HUNTER", "HUNTER"], ["MAGE", "MAGE"], ["PALADIN", "PALADIN"], ["PRIEST", "PRIEST"], ["ROGUE", "ROGUE"], ["SHAMAN", "SHAMAN"], ["WARLOCK", "WARLOCK"], ["WARRIOR", "WARRIOR"], ["SELF", "SELF"], ["OPPONENT", "OPPONENT"], ["BOSS", "BOSS"]]), "HeroClass");
        this.appendDummyInput()
            .appendField("Rarity")
            .appendField(new Blockly.FieldDropdown([["FREE", "FREE"], ["COMMON", "COMMON"], ["RARE", "RARE"], ["EPIC", "EPIC"], ["LEGENDARY", "LEGENDARY"]]), "Rarity");
        this.appendDummyInput()
            .appendField("baseManaCost")
            .appendField(new Blockly.FieldTextInput("0"), "baseManaCost");
        this.appendDummyInput()
            .appendField("Collectible")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "collectible");
        this.appendStatementInput("Attributes")
            .setCheck("Attribute")
            .appendField("Attributes");
        this.appendDummyInput()
            .appendField("CardType");
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};