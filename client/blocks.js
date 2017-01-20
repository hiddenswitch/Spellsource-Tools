/**
 * Created by chris on 1/6/17.
 */
import * as Blockly from 'node-blockly/browser';
import {ClassSpec, FieldSpec} from './WorkspaceUtils';
import ParserValueType from '../lib/metastone/ParserValueType';

Blockly.Blocks['BattlecryDesc'] = new ClassSpec(
    [new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'targetSelection', parserValueType: ParserValueType.TARGET_SELECTION, defaultValue: null}),
        new FieldSpec({key: 'condition', parserValueType: ParserValueType.CONDITION, defaultValue: null}),
        new FieldSpec({key: 'description', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'BattlecryDesc'}
).toBlock();

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
        this.setPreviousStatement(true, 'carddesc');
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
        this.setPreviousStatement(true, 'carddesc');
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
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['HeroCard'] = new ClassSpec(
    [new FieldSpec({key: 'type', parserValueType: ParserValueType.STRING, defaultValue: "HERO"}),
        new FieldSpec({key: 'heroClass', parserValueType: ParserValueType.HERO_CLASS, defaultValue: null}),
        new FieldSpec({key: 'heroPower', parserValueType: ParserValueType.CARD_SOURCE, defaultValue: null}),
        new FieldSpec({key: 'weapon', parserValueType: ParserValueType.CARD_SOURCE, defaultValue: null})],
    {name: 'HeroCard'}
).toBlock();

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

Blockly.Blocks['HeroPowerCard'] = new ClassSpec(
    [new FieldSpec({key: 'targetSelection', parserValueType: ParserValueType.TARGET_SELECTION, defaultValue: null}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'condition', parserValueType: ParserValueType.CONDITION, defaultValue: null}),
        new FieldSpec({key: 'options', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'bothOptions', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'HeroPowerCard'}
).toBlock();

Blockly.Blocks['ChooseOneCard'] = new ClassSpec(
    [new FieldSpec({key: 'targetSelection', parserValueType: ParserValueType.TARGET_SELECTION, defaultValue: null}),
        new FieldSpec({key: 'options', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'bothOptions', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'ChooseOneCard'}
).toBlock();

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

Blockly.Blocks['Taunt'] = {
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

Blockly.Blocks['Frozen'] = {
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

Blockly.Blocks['Battlecry'] = {
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

Blockly.Blocks['Charge'] = {
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

Blockly.Blocks['UntargetableBySpells'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("untargetableBySpells")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "UNTARGETABLE_BY_SPELLS");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['Deathrattles'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("deathrattles")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "DEATHRATTLES");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['Stealth'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("stealth")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "STEALTH");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['Combo'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Combo")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "COMBO");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['DivineShield'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("DivineShield")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "DIVINE_SHIELD");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['Enragable'] = {
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

Blockly.Blocks['HP'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("HP")
            .appendField(new Blockly.FieldNumber(0), "HP")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['MAX_HP'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("MAX_HP")
            .appendField(new Blockly.FieldNumber(0), "MAX_HP")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['ArmorGainedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ArmorGainedTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'ArmorGainedTrigger'}
).toBlock();

Blockly.Blocks['AfterSpellCastedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AfterSpellCastedTrigger"}),
        new FieldSpec({key: 'sourcePlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'fireCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null}),
        new FieldSpec({key: 'targetEntityType', parserValueType: ParserValueType.ENTITY_TYPE, defaultValue: null}),
        new FieldSpec({key: 'hostTargetType', parserValueType: ParserValueType.TARGET_TYPE, defaultValue: null})],
    {name: 'AfterSpellCastedTrigger'}
).toBlock();

Blockly.Blocks['AfterPhysicalAttackTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AfterPhysicalAttackTrigger"}),
        new FieldSpec({key: 'sourcePlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'sourceEntityType', parserValueType: ParserValueType.ENTITY_TYPE, defaultValue: null}),
        new FieldSpec({key: 'targetEntityType', parserValueType: ParserValueType.ENTITY_TYPE, defaultValue: null}),
        new FieldSpec({key: 'hostTargetType', parserValueType: ParserValueType.TARGET_TYPE, defaultValue: null})],
    {name: 'AfterPhysicalAttackTrigger'}
).toBlock();

Blockly.Blocks['AfterMinionSummonedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AfterMinionSummonedTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'requiredAttribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null}),
        new FieldSpec({key: 'queueCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null}),
        new FieldSpec({key: 'hostTargetType', parserValueType: ParserValueType.TARGET_TYPE, defaultValue: null}),
        new FieldSpec({key: 'fireCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null}),
        new FieldSpec({key: 'race', parserValueType: ParserValueType.RACE, defaultValue: null})],
    {name: 'AfterMinionSummonedTrigger'}
).toBlock();

Blockly.Blocks['AfterMinionPlayedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AfterMinionPlayedTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'requiredAttribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null}),
        new FieldSpec({key: 'queueCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'AfterMinionPlayedTrigger'}
).toBlock();

Blockly.Blocks['InDeckFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "InDeckFilter"})],
    {name: 'InDeckFilter'}
).toBlock();

Blockly.Blocks['InHandFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "InHandFilter"})],
    {name: 'InHandFilter'}
).toBlock();

Blockly.Blocks['OrFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "OrFilter"}),
        new FieldSpec({key: 'filters', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null}),
        new FieldSpec({key: 'invert', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'OrFilter'}
).toBlock();

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
        new FieldSpec({key: 'attribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null})],
    {name: 'AttributeValueProvider'}
).toBlock();

Blockly.Blocks['MetaSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "MetaSpell"}),
        new FieldSpec({key: 'spells', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'MetaSpell'}
).toBlock();

Blockly.Blocks['CardFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CardFilter"}),
        new FieldSpec({key: 'cardId', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'cardType', parserValueType: ParserValueType.CARD_TYPE, defaultValue: null}),
        new FieldSpec({key: 'race', parserValueType: ParserValueType.RACE, defaultValue: null}),
        new FieldSpec({key: 'rarity', parserValueType: ParserValueType.RARITY, defaultValue: null}),
        new FieldSpec({key: 'heroClass', parserValueType: ParserValueType.HERO_CLASS, defaultValue: null}),
        new FieldSpec({key: 'manaCost', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null})],
    {name: 'CardFilter'}
).toBlock();

Blockly.Blocks['DestroyAllExceptOneSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DestroyAllExceptOneSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'filter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'DestroyAllExceptOneSpell'}
).toBlock();

Blockly.Blocks['SpecificCardFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SpecificCardFilter"}),
        new FieldSpec({key: 'cardId', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'SpecificCardFilter'}
).toBlock();

Blockly.Blocks['HighestAttributeFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HighestAttributeFilter"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'attribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null})],
    {name: 'HighestAttributeFilter'}
).toBlock();

Blockly.Blocks['AndFilter'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AndFilter"}),
        new FieldSpec({key: 'filters', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'AndFilter'}
).toBlock();

Blockly.Blocks['ShuffleToDeckSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ShuffleToDeckSpell"}),
        new FieldSpec({key: 'cardFilter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'ShuffleToDeckSpell'}
).toBlock();

Blockly.Blocks['DestroySpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DestroySpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'randomTarget', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'DestroySpell'}
).toBlock();

Blockly.Blocks['CastRepeatedlySpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CastRepeatedlySpell"}),
        new FieldSpec({key: 'howMany', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'CastRepeatedlySpell'}
).toBlock();

Blockly.Blocks['TriggerDeathrattleSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "TriggerDeathrattleSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'filter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'TriggerDeathrattleSpell'}
).toBlock();

Blockly.Blocks['TransformToRandomMinionSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "TransformToRandomMinionSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'cardFilter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'TransformToRandomMinionSpell'}
).toBlock();

Blockly.Blocks['TransformCardSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "TransformCardSpell"}),
        new FieldSpec({key: 'card', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'TransformCardSpell'}
).toBlock();

Blockly.Blocks['SwipeSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SwipeSpell"}),
        new FieldSpec({key: 'secondaryTarget', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE, defaultValue: 0}),
        new FieldSpec({key: 'secondaryValue', parserValueType: ParserValueType.VALUE, defaultValue: 0})],
    {name: 'SwipeSpell'}
).toBlock();

Blockly.Blocks['SwapHpSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SwapHpSpell"})],
    {name: 'SwapHpSpell'}
).toBlock();

Blockly.Blocks['SwapAttackSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SwapAttackSpell"})],
    {name: 'SwapAttackSpell'}
).toBlock();

Blockly.Blocks['SwapAttackAndHpSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SwapAttackAndHpSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null})],
    {name: 'SwapAttackAndHpSpell'}
).toBlock();

Blockly.Blocks['SummonSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SummonSpell"}),
        new FieldSpec({key: 'card', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'boardPositionRelative', parserValueType: ParserValueType.BOARD_POSITION_RELATIVE, defaultValue: null}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null})],
    {name: 'SummonSpell'}
).toBlock();

Blockly.Blocks['SummonRandomSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SummonRandomSpell"}),
        new FieldSpec({key: 'cards', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'boardPositionRelative', parserValueType: ParserValueType.BOARD_POSITION_RELATIVE, defaultValue: null})],
    {name: 'SummonRandomSpell'}
).toBlock();

Blockly.Blocks['SummonRandomNotOnBoardSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "SummonRandomNotOnBoardSpell"}),
        new FieldSpec({key: 'cards', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'SummonRandomNotOnBoardSpell'}
).toBlock();

Blockly.Blocks['DiscardTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DiscardTrigger"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'DiscardTrigger'}
).toBlock();

Blockly.Blocks['EnrageChangedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "EnrageChangedTrigger"})],
    {name: 'EnrageChangedTrigger'}
).toBlock();

Blockly.Blocks['FatalDamageTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "FatalDamageTrigger"}),
        new FieldSpec({key: 'sourcePlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetEntityType', parserValueType: ParserValueType.ENTITY_TYPE, defaultValue: null})],
    {name: 'FatalDamageTrigger'}
).toBlock();

Blockly.Blocks['DamageReceivedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DamageReceivedTrigger"}),
        new FieldSpec({key: 'cardType', parserValueType: ParserValueType.CARD_TYPE, defaultValue: null}),
        new FieldSpec({key: 'sourcePlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetEntityType', parserValueType: ParserValueType.ENTITY_TYPE, defaultValue: null}),
        new FieldSpec({key: 'hostTargetType', parserValueType: ParserValueType.TARGET_TYPE, defaultValue: null}),
        new FieldSpec({key: 'fireCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'DamageReceivedTrigger'}
).toBlock();

Blockly.Blocks['DamageCausedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DamageCausedTrigger"}),
        new FieldSpec({key: 'cardType', parserValueType: ParserValueType.CARD_TYPE, defaultValue: null}),
        new FieldSpec({key: 'sourcePlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'targetEntityType', parserValueType: ParserValueType.ENTITY_TYPE, defaultValue: null}),
        new FieldSpec({key: 'hostTargetType', parserValueType: ParserValueType.TARGET_TYPE, defaultValue: null})],
    {name: 'DamageCausedTrigger'}
).toBlock();

Blockly.Blocks['CardReceivedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CardReceivedTrigger"}),
        new FieldSpec({key: 'race', parserValueType: ParserValueType.RACE, defaultValue: null}),
        new FieldSpec({key: 'hostTargetType', parserValueType: ParserValueType.TARGET_TYPE, defaultValue: null})],
    {name: 'CardReceivedTrigger'}
).toBlock();

Blockly.Blocks['CardPlayedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CardPlayedTrigger"}),
        new FieldSpec({key: 'race', parserValueType: ParserValueType.RACE, defaultValue: null}),
        new FieldSpec({key: 'requiredAttribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'cardType', parserValueType: ParserValueType.CARD_TYPE, defaultValue: null}),
        new FieldSpec({key: 'queueCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'CardPlayedTrigger'}
).toBlock();

Blockly.Blocks['CardDrawnTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CardDrawnTrigger"}),
        new FieldSpec({key: 'sourceTargetType', parserValueType: ParserValueType.TARGET_TYPE, defaultValue: null}),
        new FieldSpec({key: 'hostTargetType', parserValueType: ParserValueType.TARGET_TYPE, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'queueCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'CardDrawnTrigger'}
).toBlock();

Blockly.Blocks['BoardChangedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "BoardChangedTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'BoardChangedTrigger'}
).toBlock();

Blockly.Blocks['BeforeMinionPlayedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "BeforeMinionPlayedTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'queueCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'BeforeMinionPlayedTrigger'}
).toBlock();

Blockly.Blocks['BeforeMinionSummonedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "BeforeMinionSummonedTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null}),
        new FieldSpec({key: 'queueCondition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'BeforeMinionSummonedTrigger'}
).toBlock();

Blockly.Blocks['GameStartTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "GameStartTrigger"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'GameStartTrigger'}
).toBlock();

Blockly.Blocks['GameStateChangedTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "GameStateChangedTrigger"})],
    {name: 'GameStateChangedTrigger'}
).toBlock();

Blockly.Blocks['HealingTrigger'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HealingTrigger"})],
    {name: 'HealingTrigger'}
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

Blockly.Blocks['Trigger'] = new ClassSpec(
    [new FieldSpec({key: 'eventTrigger', parserValueType: ParserValueType.EVENT_TRIGGER, defaultValue: null}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'oneTurn', parserValueType: ParserValueType.BOOLEAN, defaultValue: false}),
        new FieldSpec({key: 'persistentOwner', parserValueType: ParserValueType.BOOLEAN, defaultValue: false}),
        new FieldSpec({key: 'turnDelay', parserValueType: ParserValueType.INTEGER, defaultValue: 0})],
    {name: 'Trigger'}
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

Blockly.Blocks['OrCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "OrCondition"}),
        new FieldSpec({key: 'conditions', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'OrCondition'}
).toBlock();

Blockly.Blocks['OwnedByPlayerCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "OwnedByPlayerCondition"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'OwnedByPlayerCondition'}
).toBlock();

Blockly.Blocks['AddCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AddCondition"}),
        new FieldSpec({key: 'conditions', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'AddCondition'}
).toBlock();

Blockly.Blocks['AttributeCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "AttributeCondition"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'attribute', parserValueType: ParserValueType.ATTRIBUTE, defaultValue: null}),
        new FieldSpec({key: 'operation', parserValueType: ParserValueType.OPERATION, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE, defaultValue: 0})],
    {name: 'AttributeCondition'}
).toBlock();

Blockly.Blocks['CardCountCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CardCountCondition"}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'operation', parserValueType: ParserValueType.OPERATION, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE, defaultValue: 0})],
    {name: 'CardCountCondition'}
).toBlock();

Blockly.Blocks['CardPropertyCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CardPropertyCondition"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'cardType', parserValueType: ParserValueType.CARD_TYPE, defaultValue: null}),
        new FieldSpec({key: 'cardId', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'invert', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'CardPropertyCondition'}
).toBlock();

Blockly.Blocks['ComboCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ComboCondition"})],
    {name: 'ComboCondition'}
).toBlock();

Blockly.Blocks['RaceCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "RaceCondition"}),
        new FieldSpec({key: 'race', parserValueType: ParserValueType.RACE, defaultValue: null}),
        new FieldSpec({key: 'invert', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'RaceCondition'}
).toBlock();

Blockly.Blocks['ComparisonCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ComparisonCondition"}),
        new FieldSpec({key: 'operation', parserValueType: ParserValueType.OPERATION, defaultValue: null}),
        new FieldSpec({key: 'value1', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null}),
        new FieldSpec({key: 'value2', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null})],
    {name: 'ComparisonCondition'}
).toBlock();

Blockly.Blocks['ControlsSecretCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ControlsSecretCondition"})],
    {name: 'ControlsSecretCondition'}
).toBlock();

Blockly.Blocks['DeckContainsCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "DeckContainsCondition"}),
        new FieldSpec({key: 'cardFilter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'DeckContainsCondition'}
).toBlock();

Blockly.Blocks['GraveyardContainsCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "GraveyardContainsCondition"}),
        new FieldSpec({key: 'cardId', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'GraveyardContainsCondition'}
).toBlock();

Blockly.Blocks['GraveyardCountCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "GraveyardCountCondition"}),
        new FieldSpec({key: 'operation', parserValueType: ParserValueType.OPERATION, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE, defaultValue: 0})],
    {name: 'GraveyardCountCondition'}
).toBlock();

Blockly.Blocks['HasAttackedCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HasAttackedCondition"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null})],
    {name: 'HasAttackedCondition'}
).toBlock();

Blockly.Blocks['HasEntitiesOnBoardCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HasEntitiesOnBoardCondition"}),
        new FieldSpec({key: 'cardIds', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'HasEntitiesOnBoardCondition'}
).toBlock();

Blockly.Blocks['HasEntityCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HasEntityCondition"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'filter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'HasEntityCondition'}
).toBlock();

Blockly.Blocks['HasHeroPowerCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HasHeroPowerCondition"}),
        new FieldSpec({key: 'cardId', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'invert', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'HasHeroPowerCondition'}
).toBlock();

Blockly.Blocks['HasWeaponCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HasWeaponCondition"}),
        new FieldSpec({key: 'cardId', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'invert', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'HasWeaponCondition'}
).toBlock();

Blockly.Blocks['HighlanderDeckCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HighlanderDeckCondition"})],
    {name: 'HighlanderDeckCondition'}
).toBlock();

Blockly.Blocks['HoldsCardCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HoldsCardCondition"}),
        new FieldSpec({key: 'cardFilter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'HoldsCardCondition'}
).toBlock();

Blockly.Blocks['IsDamagedCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "IsDamagedCondition"})],
    {name: 'IsDamagedCondition'}
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

Blockly.Blocks['ChangeHeroPowerSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ChangeHeroPowerSpell"}),
        new FieldSpec({key: 'card', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'ChangeHeroPowerSpell'}
).toBlock();

Blockly.Blocks['ChangeHeroSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ChangeHeroSpell"}),
        new FieldSpec({key: 'card', parserValueType: ParserValueType.STRING, defaultValue: null})],
    {name: 'ChangeHeroSpell'}
).toBlock();

Blockly.Blocks['ClearOverloadSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ClearOverloadSpell"})],
    {name: 'ClearOverloadSpell'}
).toBlock();

Blockly.Blocks['CloneMinionSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CloneMinionSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null})],
    {name: 'CloneMinionSpell'}
).toBlock();

Blockly.Blocks['ComboSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ComboSpell"}),
        new FieldSpec({key: 'exclusive', parserValueType: ParserValueType.BOOLEAN, defaultValue: false}),
        new FieldSpec({key: 'spell1', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'spell2', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'ComboSpell'}
).toBlock();

Blockly.Blocks['ConditionalAttackBonusSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ConditionalAttackBonusSpell"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null})],
    {name: 'ConditionalAttackBonusSpell'}
).toBlock();

Blockly.Blocks['ConditionalSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "ConditionalSpell"}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null}),
        new FieldSpec({key: 'condition', parserValueType: ParserValueType.CONDITION, defaultValue: null})],
    {name: 'ConditionalSpell'}
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

Blockly.Blocks['CopyCardSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CopyCardSpell"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.VALUE, defaultValue: 0}),
        new FieldSpec({key: 'cardLocation', parserValueType: ParserValueType.CARD_LOCATION, defaultValue: null}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'targetPlayer', parserValueType: ParserValueType.TARGET_PLAYER, defaultValue: null})],
    {name: 'CopyCardSpell'}
).toBlock();

Blockly.Blocks['CopyDeathrattleSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CopyDeathrattleSpell"}),
        new FieldSpec({key: 'filter', parserValueType: ParserValueType.ENTITY_FILTER, defaultValue: null})],
    {name: 'CopyDeathrattleSpell'}
).toBlock();

Blockly.Blocks['CopyHeroPower'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CopyHeroPower"}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null})],
    {name: 'CopyHeroPower'}
).toBlock();

Blockly.Blocks['CreateCardSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CreateCardSpell"}),
        new FieldSpec({key: 'name', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'secondaryName', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'description', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'cardType', parserValueType: ParserValueType.CARD_TYPE, defaultValue: null}),
        new FieldSpec({key: 'mana', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'CreateCardSpell'}
).toBlock();

Blockly.Blocks['CreateSummonSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "CreateSummonSpell"}),
        new FieldSpec({key: 'name', parserValueType: ParserValueType.STRING, defaultValue: null}),
        new FieldSpec({key: 'attackBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'hpBonus', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'mana', parserValueType: ParserValueType.VALUE_PROVIDER, defaultValue: null}),
        new FieldSpec({key: 'spell', parserValueType: ParserValueType.SPELL, defaultValue: null})],
    {name: 'CreateSummonSpell'}
).toBlock();

Blockly.Blocks['HealSpell'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "HealSpell"}),
        new FieldSpec({key: 'value', parserValueType: ParserValueType.INTEGER, defaultValue: 0}),
        new FieldSpec({key: 'target', parserValueType: ParserValueType.ENTITY, defaultValue: null}),
        new FieldSpec({key: 'randomTarget', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'HealSpell'}
).toBlock();

Blockly.Blocks['IsDeadCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "IsDeadCondition"}),
        new FieldSpec({key: 'invert', parserValueType: ParserValueType.BOOLEAN, defaultValue: false})],
    {name: 'IsDeadCondition'}
).toBlock();

Blockly.Blocks['RandomCondition'] = new ClassSpec(
    [new FieldSpec({key: 'class', parserValueType: ParserValueType.STRING, defaultValue: "RandomCondition"})],
    {name: 'RandomCondition'}
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