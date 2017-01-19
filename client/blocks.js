/**
 * Created by chris on 1/6/17.
 */
import * as Blockly from 'node-blockly/browser';
import {ClassSpec, FieldSpec} from './WorkspaceUtils';
import ParserValueType from '../lib/metastone/ParserValueType';

Blockly.Blocks['Battlecry'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Battlecry");
        this.appendStatementInput("spell")
            .setCheck("DamageSpell")
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

Blockly.Blocks['MinionCard'] = {
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

Blockly.Blocks['WeaponCard'] = {
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
        this.appendStatementInput("cardCostModifier")
            .setCheck("spell")
            .appendField("cardCostModifier");
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

Blockly.Blocks['HeroCard'] = {
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

Blockly.Blocks['SpellCard'] = {
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
        this.appendStatementInput("condition")
            .setCheck("condition")
            .appendField("condition");
        this.setInputsInline(false);
        this.setPreviousStatement(true, ["carddesc", "heropower"]);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['HeroPowerCard'] = {
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

Blockly.Blocks['ChooseOneCard'] = {
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

Blockly.Blocks['DamageSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DamageSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'filter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'DamageSpell'}
).toBlock();

Blockly.Blocks['TransformMinionSpell'] = {
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

Blockly.Blocks['number'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "value")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['SpellDamage'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("SpellDamage")
            .appendField(new Blockly.FieldNumber(0), "SPELL_DAMAGE")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['PlayerAttributeValueProvider'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "PlayerAttributeValueProvider"}),
        new FieldSpec({key: 'playerAttribute', parserValueType: ParserValueType.PLAYER_ATTRIBUTE, defaultValue: null})],
    {name: 'PlayerAttributeValueProvider'}
).toBlock();

Blockly.Blocks['CastRandomSpellSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CastRandomSpellSpell"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null})],
    {name: 'CastRandomSpellSpell'}
).toBlock();

Blockly.Blocks['CardCostModifier'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CardCostModifier"}),
        new FieldSpec({key: 'cardType', parserValueType: ParserValueType.CARD_TYPE, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'operation', parserValueType: ParserValueType.ALGEBRAIC_OPERATION, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'requiredAttribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null})],
    {name: 'CardCostModifier'}
).toBlock();

Blockly.Blocks['AdjacentEffectSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AdjacentEffectSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'spell1', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'spell2', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'AdjacentEffectSpell'}
).toBlock();

Blockly.Blocks['PhysicalAttackTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "PhysicalAttackTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetEntityType', parserValueType: ParserValueType.ENTITY_TYPE, defaultValue: null})],
    {name: 'PhysicalAttackTrigger'}
).toBlock();

Blockly.Blocks['AddSecretSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AddSecretSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'secret', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'AddSecretSpell'}
).toBlock();

Blockly.Blocks['ReviveMinionSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ReviveMinionSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'hpAdjustment', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'ReviveMinionSpell'}
).toBlock();

Blockly.Blocks['AddDeathrattleSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AddDeathrattleSpell"}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null})],
    {name: 'AddDeathrattleSpell'}
).toBlock();

Blockly.Blocks['TemporaryAttackSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "TemporaryAttackSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'TemporaryAttackSpell'}
).toBlock();

Blockly.Blocks['AttributeValueProvider'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AttributeValueProvider"}),
        new FieldSpec({key: 'attribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null})],
    {name: 'AttributeValueProvider'}
).toBlock();

Blockly.Blocks['MetaSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "MetaSpell"}),
        new FieldSpec({key: 'spells', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'MetaSpell'}
).toBlock();

Blockly.Blocks['DestroySpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DestroySpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'randomTarget', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'DestroySpell'}
).toBlock();

Blockly.Blocks['TurnStartTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "TurnStartTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'TurnStartTrigger'}
).toBlock();

Blockly.Blocks['TurnEndTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "TurnEndTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'TurnEndTrigger'}
).toBlock();

Blockly.Blocks['trigger'] = new ClassSpec(
    [new FieldSpec({key: 'eventTrigger', parserValueType: ParserValueType.EVENT_TRIGGER, defaultValue: null}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'oneTurn', parserValueType: ParserValueType.BOOLEAN, defaultValue: false}),
        new FieldSpec({key: 'persistentOwner', parserValueType: ParserValueType.BOOLEAN, defaultValue: false}),
        new FieldSpec({key: 'turnDelay', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'trigger'}
).toBlock();

Blockly.Blocks['MinionCountCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "MinionCountCondition"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'operation', parserValueType: ParserValueType.OPERATION, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE, defaultValue: 0})],
    {name: 'MinionCountCondition'}
).toBlock();

Blockly.Blocks['MultiTargetSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "MultiTargetSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE, defaultValue: 0}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'MultiTargetSpell'}
).toBlock();

Blockly.Blocks['DiscardSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DiscardSpell"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE, defaultValue: 0}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null})],
    {name: 'DiscardSpell'}
).toBlock();

Blockly.Blocks['MinionOnBoardCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "MinionOnBoardCondition"}),
        new FieldSpec({key: 'cardFilter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'MinionOnBoardCondition'}
).toBlock();

Blockly.Blocks['ConditionalValueProvider'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ConditionalValueProvider"}),
        new FieldSpec({key: 'ifTrue', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'ifFalse', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'condition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'ConditionalValueProvider'}
).toBlock();

Blockly.Blocks['SetHpSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SetHpSpell"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'SetHpSpell'}
).toBlock();

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

Blockly.Blocks['DamagedFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DamagedFilter"})],
    {name: 'DamagedFilter'}
).toBlock();

Blockly.Blocks['RaceFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "RaceFilter"}),
        new FieldSpec({key: 'race', parserValueType: ParserValueType.RACE, defaultValue: null})],
    {name: 'RaceFilter'}
).toBlock();

Blockly.Blocks['AttributeFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AttributeFilter"}),
        new FieldSpec({key: 'attribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null}),
        new FieldSpec({key: 'operation', parserValueType: ParserValueType.OPERATION, defaultValue: null})],
    {name: 'AttributeFilter'}
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

Blockly.Blocks['ConditionalEffectSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ConditionalEffectSpell"}),
        new FieldSpec({key: 'spell1', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'spell2', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'condition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'ConditionalEffectSpell'}
).toBlock();

Blockly.Blocks['HealSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HealSpell"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'randomTarget', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'HealSpell'}
).toBlock();

Blockly.Blocks['IsDeadCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "IsDeadCondition"})],
    {name: 'IsDeadCondition'}
).toBlock();

Blockly.Blocks['AddSpellTriggerSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AddSpellTriggerSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'trigger', parserValueType: ParserValueType.TRIGGER, defaultValue: null})],
    {name: 'AddSpellTriggerSpell'}
).toBlock();

Blockly.Blocks['BuffHeroSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "BuffHeroSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'attackBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'armorBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'BuffHeroSpell'}
).toBlock();

Blockly.Blocks['EntityCounter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "EntityCounter"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),],
    {name: 'EntityCounter'}
).toBlock();

Blockly.Blocks['BuffSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "BuffSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null}),
        new FieldSpec({key: 'attackBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'hpBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'BuffSpell'}
).toBlock();

Blockly.Blocks['AddAttributeSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AddAttributeSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.TARGET_SELECTION, defaultValue: null}),
        new FieldSpec({key: 'attribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null})],
    {name: 'AddAttributeSpell'}
).toBlock();

Blockly.Blocks['SilenceSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SilenceSpell"})],
    {name: 'SilenceSpell'}
).toBlock();