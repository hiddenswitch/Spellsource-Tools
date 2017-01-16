/**
 * Created by chris on 1/6/17.
 */
import * as Blockly from 'node-blockly/browser';

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
    init: function() {
        this.appendDummyInput()
            .appendField("BattlecryDesc");
        this.appendStatementInput("spell")
            .setCheck("DamageSpellDesc")
            .appendField("spell");
        this.appendDummyInput()
            .appendField("targetSelection")
            .appendField(new Blockly.FieldDropdown([["NONE","NONE"], ["AUTO","AUTO"], ["ANY","ANY"], ["MINIONS","MINIONS"], ["ENEMY_CHARACTERS","ENEMY_CHARACTERS"], ["FRIENDLY_CHARACTERS","FRIENDLY_CHARACTERS"], ["ENEMY_MINIONS","ENEMY_MINIONS"], ["FRIENDLY_MINIONS","FRIENDLY_MINIONS"], ["HEROES","HEROES"], ["ENEMY_HERO","ENEMY_HERO"], ["FRIENDLY_HERO","FRIENDLY_HERO"]]), "TargetSelection");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['minioncarddesc'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("CardType: MINION");
        this.appendDummyInput()
            .appendField("baseAttack")
            .appendField(new Blockly.FieldTextInput("0"), "baseAttack")
            .appendField("baseHp")
            .appendField(new Blockly.FieldTextInput("0"), "baseHp");
        this.appendDummyInput()
            .appendField("race")
            .appendField(new Blockly.FieldDropdown([["NONE","NONE"], ["BEAST","BEAST"], ["MURLOC","MURLOC"], ["PIRATE","PIRATE"], ["DEMON","DEMON"], ["DRAGON","DRAGON"], ["TOTEM","TOTEM"], ["MECH","MECH"]]), "race");
        this.appendStatementInput("battlecrydesc")
            .setCheck("battlecrydesc")
            .appendField("battlecry");
        this.appendStatementInput("spelldesc")
            .setCheck("spelldesc")
            .appendField("deathrattle");
        this.appendStatementInput("triggerdesc")
            .setCheck("triggerdesc")
            .appendField("trigger");
        this.appendStatementInput("triggerdesc[]")
            .setCheck("triggerdesc[]")
            .appendField("triggers");
        this.appendStatementInput("auradesc")
            .setCheck("auradesc")
            .appendField("aura");
        this.appendStatementInput("NAME")
            .setCheck("battlecrydesc")
            .appendField("options");
        this.appendStatementInput("NAME")
            .setCheck("battlecrydesc")
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
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(new Blockly.FieldTextInput("name"), "name");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("description"), "description");
        this.appendDummyInput()
            .appendField("HeroClass")
            .appendField(new Blockly.FieldDropdown([["ANY","ANY"], ["DECK_COLLECTION","DECK_COLLECTION"], ["NEUTRAL","NEUTRAL"], ["DRUID","DRUID"], ["HUNTER","HUNTER"], ["MAGE","MAGE"], ["PALADIN","PALADIN"], ["PRIEST","PRIEST"], ["ROGUE","ROGUE"], ["SHAMAN","SHAMAN"], ["WARLOCK","WARLOCK"], ["WARRIOR","WARRIOR"], ["SELF","SELF"], ["OPPONENT","OPPONENT"], ["BOSS","BOSS"]]), "HeroClass");
        this.appendDummyInput()
            .appendField("Rarity")
            .appendField(new Blockly.FieldDropdown([["FREE","FREE"], ["COMMON","COMMON"], ["RARE","RARE"], ["EPIC","EPIC"], ["LEGENDARY","LEGENDARY"]]), "Rarity");
        this.appendDummyInput()
            .appendField("CardSet")
            .appendField(new Blockly.FieldDropdown([["ANY","ANY"], ["BASIC","BASIC"], ["CLASSIC","CLASSIC"], ["REWARD","REWARD"], ["PROMO","PROMO"], ["NAXXRAMAS","MAXXRAMAS"], ["GOBLINS_VS_GNOMES","GOBLINS_VS_GNOMES"], ["BLACKROCK_MOUNTAIN","BLACKROCK_MOUNTAIN"], ["THE_GRAND_TOURNAMENT","THE_GRAND_TOURNAMENT"], ["LEAGUE_OF_EXPLORERS","LEAGUE_OF_EXPLORERS"], ["THE_OLD_GODS","THE_OLD_GODS"], ["ONE_NIGHT_IN_KARAZHAN","ONE_NIGHT_IN_KARAZHAN"], ["MEAN_STREETS_OF_GADGETZHAN","MEAN_STREETS_OF_GADGETZHAN"], ["PROCEDURAL_PREVIEW","PROCEDURAL_PREVIEW"], ["CUSTOM","CUSTOM"]]), "set");
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
            .appendField("fileFormatVersion")
            .appendField(new Blockly.FieldTextInput("1"), "fileFormatVersion");
        this.appendDummyInput()
            .appendField("CardType");
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['herocarddesc'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("CardType: HERO");
        this.appendStatementInput("NAME")
            .setCheck("heropower")
            .appendField("heroPower");
        this.appendDummyInput();
        this.appendDummyInput()
            .appendField("Race")
            .appendField(new Blockly.FieldDropdown([["NONE","NONE"], ["BEAST","BEAST"], ["MURLOC","MURLOC"], ["PIRATE","PIRATE"], ["DEMON","DEMON"], ["DRAGON","DRAGON"], ["TOTEM","TOTEM"], ["MECH","MECH"]]), "Race");
        this.setPreviousStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['spellcarddesc'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Spell");
        this.appendDummyInput()
            .appendField("TargetSelection")
            .appendField(new Blockly.FieldDropdown([["NONE","NONE"], ["AUTO","AUTO"], ["ANY","ANY"], ["MINIONS","MINIONS"], ["ENEMY_CHARACTERS","ENEMY_CHARACTERS"], ["FRIENDLY_CHARACTERS","FRIENDLY_CHARACTERS"], ["ENEMY_MINIONS","ENEMY_MINIONS"], ["FRIENDLY_MINIONS","FRIENDLY_MINIONS"], ["HEROES","HEROES"], ["ENEMY_HERO","ENEMY_HERO"], ["FRIENDLY_HERO","FRIENDLY_HERO"]]), "TargetSelection");
        this.appendDummyInput()
            .appendField("SpellDesc")
            .appendField(new Blockly.FieldTextInput("spell"), "spell");
        this.appendDummyInput()
            .appendField("ConditionDesc")
            .appendField(new Blockly.FieldTextInput("condition"), "condition");
        this.setInputsInline(false);
        this.setPreviousStatement(true, ["carddesc", "heropower"]);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['heropowercarddesc'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("CardType: HERO_POWER");
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
    init: function() {
        this.appendDummyInput()
            .appendField("CardType: CHOOSE_ONE");
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
    init: function() {
        this.appendDummyInput()
            .appendField("DamageSpellDesc");
        this.appendDummyInput()
            .appendField("value")
            .appendField(new Blockly.FieldTextInput("value"), "value");
        this.appendStatementInput("filter")
            .setCheck("fiilter")
            .appendField("filter");
        this.appendDummyInput()
            .appendField("target")
            .appendField(new Blockly.FieldTextInput("target"), "target");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};