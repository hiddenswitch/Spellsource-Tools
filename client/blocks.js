/**
 * Created by chris on 1/6/17.
 */
import * as Blockly from 'node-blockly/browser';
import {ClassSpec, FieldSpec} from './WorkspaceUtils';
import ParserValueType from '../lib/metastone/ParserValueType';

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
        this.appendStatementInput("spell")
            .setCheck("DamageSpellDesc")
            .appendField("spell");
        this.appendDummyInput()
            .appendField("targetSelection")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["AUTO", "AUTO"], ["ANY", "ANY"], ["MINIONS", "MINIONS"], ["ENEMY_CHARACTERS", "ENEMY_CHARACTERS"], ["FRIENDLY_CHARACTERS", "FRIENDLY_CHARACTERS"], ["ENEMY_MINIONS", "ENEMY_MINIONS"], ["FRIENDLY_MINIONS", "FRIENDLY_MINIONS"], ["HEROES", "HEROES"], ["ENEMY_HERO", "ENEMY_HERO"], ["FRIENDLY_HERO", "FRIENDLY_HERO"]]), "targetSelection");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['minioncarddesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("type")
            .appendField(new Blockly.FieldTextInput("MINION"), "type")
        this.appendDummyInput()
            .appendField("baseAttack")
            .appendField(new Blockly.FieldNumber(0, 0, 10), "baseAttack")
            //.appendField(new Blockly.FieldTextInput("0"), "baseAttack")
            .appendField("baseHp")
            .appendField(new Blockly.FieldNumber(0, 0, 10), "baseHp")
        //.appendField(new Blockly.FieldTextInput("0"), "baseHp");
        this.appendDummyInput()
            .appendField("race")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["BEAST", "BEAST"], ["MURLOC", "MURLOC"], ["PIRATE", "PIRATE"], ["DEMON", "DEMON"], ["DRAGON", "DRAGON"], ["TOTEM", "TOTEM"], ["MECH", "MECH"]]), "race");
        this.appendStatementInput("battlecry")
            .setCheck("battlecry")
            .appendField("battlecry");
        this.appendStatementInput("spell")
            .setCheck("spell")
            .appendField("deathrattle");
        this.appendStatementInput("trigger")
            .setCheck("trigger")
            .appendField("trigger");
        this.appendStatementInput("triggers")
            .setCheck("trigger")
            .appendField("triggers");
        this.appendStatementInput("aura")
            .setCheck("aura")
            .appendField("aura");
        this.appendStatementInput("options")
            .setCheck("battlecry")
            .appendField("options");
        this.appendStatementInput("bothoptions")
            .setCheck("battlecry")
            .appendField("bothOptions");
        this.setInputsInline(false);
        this.setPreviousStatement(true, "carddesc");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['weaponcarddesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("type")
            .appendField(new Blockly.FieldTextInput("WEAPON"), "type")
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
            .appendField("heroClass")
            .appendField(new Blockly.FieldDropdown([["ANY", "ANY"], ["DECK_COLLECTION", "DECK_COLLECTION"], ["NEUTRAL", "NEUTRAL"], ["DRUID", "DRUID"], ["HUNTER", "HUNTER"], ["MAGE", "MAGE"], ["PALADIN", "PALADIN"], ["PRIEST", "PRIEST"], ["ROGUE", "ROGUE"], ["SHAMAN", "SHAMAN"], ["WARLOCK", "WARLOCK"], ["WARRIOR", "WARRIOR"], ["SELF", "SELF"], ["OPPONENT", "OPPONENT"], ["BOSS", "BOSS"]]), "heroClass");
        this.appendDummyInput()
            .appendField("rarity")
            .appendField(new Blockly.FieldDropdown([["FREE", "FREE"], ["COMMON", "COMMON"], ["RARE", "RARE"], ["EPIC", "EPIC"], ["LEGENDARY", "LEGENDARY"]]), "rarity");
        this.appendDummyInput()
            .appendField("cardSet")
            .appendField(new Blockly.FieldDropdown([["ANY", "ANY"], ["BASIC", "BASIC"], ["CLASSIC", "CLASSIC"], ["REWARD", "REWARD"], ["PROMO", "PROMO"], ["NAXXRAMAS", "MAXXRAMAS"], ["GOBLINS_VS_GNOMES", "GOBLINS_VS_GNOMES"], ["BLACKROCK_MOUNTAIN", "BLACKROCK_MOUNTAIN"], ["THE_GRAND_TOURNAMENT", "THE_GRAND_TOURNAMENT"], ["LEAGUE_OF_EXPLORERS", "LEAGUE_OF_EXPLORERS"], ["THE_OLD_GODS", "THE_OLD_GODS"], ["ONE_NIGHT_IN_KARAZHAN", "ONE_NIGHT_IN_KARAZHAN"], ["MEAN_STREETS_OF_GADGETZHAN", "MEAN_STREETS_OF_GADGETZHAN"], ["PROCEDURAL_PREVIEW", "PROCEDURAL_PREVIEW"], ["CUSTOM", "CUSTOM"]]), "set");
        this.appendDummyInput()
            .appendField("baseManaCost")
            .appendField(new Blockly.FieldNumber(0, 0, 10), "baseManaCost")
        //.appendField(new Blockly.FieldTextInput("0"), "baseManaCost");
        this.appendDummyInput()
            .appendField("collectible")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "collectible");
        this.appendStatementInput("attributes")
            .setCheck("attribute")
            .appendField("attributes");
        this.appendDummyInput()
            .appendField("fileFormatVersion")
            .appendField(new Blockly.FieldNumber(0, 1, 1), "fileFormatVersion")
        //.appendField(new Blockly.FieldTextInput("1"), "fileFormatVersion");
        this.appendStatementInput("manaCostModifier")
            .setCheck("valueprovider")
            .appendField("manaCostModifier");
        this.appendStatementInput("passiveTrigger")
            .setCheck("trigger")
            .appendField("passiveTrigger");
        this.appendStatementInput("deckTrigger")
            .setCheck("trigger")
            .appendField("deckTrigger");
        this.appendDummyInput()
            .appendField("cardType");
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['herocarddesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("type")
            .appendField(new Blockly.FieldTextInput("HERO"), "type")
        this.appendStatementInput("NAME")
            .setCheck("heropower")
            .appendField("heroPower");
        this.appendDummyInput();
        this.appendDummyInput()
            .appendField("Race")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["BEAST", "BEAST"], ["MURLOC", "MURLOC"], ["PIRATE", "PIRATE"], ["DEMON", "DEMON"], ["DRAGON", "DRAGON"], ["TOTEM", "TOTEM"], ["MECH", "MECH"]]), "Race");
        this.setPreviousStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['spellcarddesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("type")
            .appendField(new Blockly.FieldTextInput("SPELL"), "type")
        this.appendDummyInput()
            .appendField("TargetSelection")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["AUTO", "AUTO"], ["ANY", "ANY"], ["MINIONS", "MINIONS"], ["ENEMY_CHARACTERS", "ENEMY_CHARACTERS"], ["FRIENDLY_CHARACTERS", "FRIENDLY_CHARACTERS"], ["ENEMY_MINIONS", "ENEMY_MINIONS"], ["FRIENDLY_MINIONS", "FRIENDLY_MINIONS"], ["HEROES", "HEROES"], ["ENEMY_HERO", "ENEMY_HERO"], ["FRIENDLY_HERO", "FRIENDLY_HERO"]]), "targetSelection");
        this.appendStatementInput("spell")
            .setCheck("spell")
            .appendField("spell");
        this.appendStatementInput("Condition")
            .setCheck("condition")
            .appendField("Condition");
        this.setInputsInline(false);
        this.setPreviousStatement(true, ["carddesc", "heropower"]);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['heropowercarddesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("type")
            .appendField(new Blockly.FieldTextInput("HERO_POWER"), "type")
        this.appendDummyInput()
            .appendField("options")
            .appendField(new Blockly.FieldTextInput("options"), "options");
        this.appendDummyInput()
            .appendField("bothOptions")
            .appendField(new Blockly.FieldTextInput("bothOptions"), "bothOptions");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['chooseonecarddesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("type")
            .appendField(new Blockly.FieldTextInput("CHOOSE_ONE"), "type")
        this.appendDummyInput()
            .appendField("options")
            .appendField(new Blockly.FieldTextInput("options"), "options");
        this.appendDummyInput()
            .appendField("bothOptions")
            .appendField(new Blockly.FieldTextInput("bothOptions"), "bothOptions");
        this.setPreviousStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['damagespelldesc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DamageSpellDesc");
        this.appendDummyInput()
            .appendField('class')
            .appendField(new Blockly.FieldTextInput('DamageSpell'), 'class');
        this.appendDummyInput()
            .appendField("value")
            .appendField(new Blockly.FieldTextInput("value"), "value");
        this.appendDummyInput()
            .appendField("target")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["AUTO", "AUTO"], ["ANY", "ANY"], ["MINIONS", "MINIONS"], ["ENEMY_CHARACTERS", "ENEMY_CHARACTERS"], ["FRIENDLY_CHARACTERS", "FRIENDLY_CHARACTERS"], ["ENEMY_MINIONS", "ENEMY_MINIONS"], ["FRIENDLY_MINIONS", "FRIENDLY_MINIONS"], ["HEROES", "HEROES"], ["ENEMY_HERO", "ENEMY_HERO"], ["FRIENDLY_HERO", "FRIENDLY_HERO"]]), "target");
        this.appendStatementInput("filter")
            .setCheck("fiilter")
            .appendField("filter");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['transformminionspell'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("TransformMinionSpell");
        this.appendDummyInput()
            .appendField('class')
            .appendField(new Blockly.FieldTextInput('TransformMinionSpell'), 'class');
        this.appendDummyInput()
            .appendField("target")
            .appendField(new Blockly.FieldDropdown([["NONE", "NONE"], ["AUTO", "AUTO"], ["ANY", "ANY"], ["MINIONS", "MINIONS"], ["ENEMY_CHARACTERS", "ENEMY_CHARACTERS"], ["FRIENDLY_CHARACTERS", "FRIENDLY_CHARACTERS"], ["ENEMY_MINIONS", "ENEMY_MINIONS"], ["FRIENDLY_MINIONS", "FRIENDLY_MINIONS"], ["HEROES", "HEROES"], ["ENEMY_HERO", "ENEMY_HERO"], ["FRIENDLY_HERO", "FRIENDLY_HERO"]]), "target");
        this.appendStatementInput("card")
            .setCheck("card")
            .appendField("card");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['taunt'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("taunt")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "TAUNT");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['frozen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("frozen")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "FROZEN");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['battlecry'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("battlecry")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "BATTLECRY");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['charge'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("charge")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "CHARGE");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['enragable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("enragable")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "ENRAGABLE");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['BuffWeaponSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "BuffWeaponSpell"}),
        new FieldSpec({key: 'attackBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'durabilityBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'BuffWeaponSpell'}
).toBlock();

Blockly.Blocks['EnrageAura'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "EnrageAura"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'applyEffect', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'removeEffect', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'EnrageAura'}
).toBlock();

Blockly.Blocks['AttributeAura'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AttributeAura"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'attribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null}),
        new FieldSpec({key: 'filter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'AttributeAura'}
).toBlock();

Blockly.Blocks['RaceFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "RaceFilter"}),
        new FieldSpec({key: 'race', parserValueType: ParserValueType.RACE, defaultValue: null})],
    {name: 'RaceFilter'}
).toBlock();

Blockly.Blocks['BuffAura'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "BuffAura"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'attackBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'filter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: 0})],
    {name: 'BuffAura'}
).toBlock();

Blockly.Blocks['DrawCardSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DrawCardSpell"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),],
    {name: 'DrawCardSpell'}
).toBlock();

Blockly.Blocks['MinionSummonedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "MinionSummonedTrigger"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),],
    {name: 'MinionSummonedTrigger'}
).toBlock();

Blockly.Blocks['HealSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HealSpell"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),],
    {name: 'HealSpell'}
).toBlock();

Blockly.Blocks['EntityCounter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "EntityCounter"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),],
    {name: 'EntityCounter'}
).toBlock();

Blockly.Blocks['buffspell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "BuffSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null}),
        new FieldSpec({key: 'attackBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'hpBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'buffspell'}
).toBlock();

Blockly.Blocks['addattributespell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AddAttributeSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.TARGET_SELECTION, defaultValue: null}),
        new FieldSpec({key: 'attribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null})],
    {name: 'AddAttributeSpell'}
).toBlock();

Blockly.Blocks['test'] = new ClassSpec(
    [new FieldSpec({key: 'baseManaCost', parserValueType: ParserValueType.INTEGER, defaultValue: 3})],
    {name: 'Test'}
).toBlock();

Blockly.Blocks['SilenceSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SilenceSpell"})],
    {name: 'SilenceSpell'}
).toBlock();

Blockly.Blocks['Spell[]'] = new ClassSpec(
    [new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'Spell[]'}
).toBlock();