/**
 * Created by bberman on 1/17/17.
 */
import * as Blockly from 'node-blockly/browser';
import ParserValueType from '../ParserValueType';
import HeroClass from '../HeroClass'

export default class WorkspaceUtils {
    static xmlToDictionary(xml) {
        // Create the return object
        let obj = {};

        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (let j = 0; j < xml.attributes.length; j++) {
                    const attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for (let i = 0; i < xml.childNodes.length; i++) {
                const item = xml.childNodes.item(i);
                const nodeName = item.nodeName;
                if (typeof(obj[nodeName]) == "undefined") {
                    obj[nodeName] = WorkspaceUtils.xmlToDictionary(item);
                } else {
                    if (typeof(obj[nodeName].push) == "undefined") {
                        const old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(WorkspaceUtils.xmlToDictionary(item));
                }
            }
        }
        return obj;
    }

    static workspaceToDictionary(workspace) {
        const xml = Blockly.Xml.workspaceToDom(workspace);
        const dictionary = WorkspaceUtils.xmlToDictionary(xml);

        let output = {};

        WorkspaceUtils.append(output, dictionary.BLOCK);

        return output;
    }

    static append(output, block) {
        // Handle the first block
        if (!!block.FIELD) {
            if (!_.isArray(block.FIELD)) {
                block.FIELD = [block.FIELD];
            }

            block.FIELD.forEach((field) => {
                output[field['@attributes'].name] = field['#text'];
            });
        }


        if (!!block.NEXT) {
            // Continue appending to current output
            WorkspaceUtils.append(output, block.NEXT.BLOCK);
        }

        // TODO: What happens when there's a next AND a statement??

        if (!!block.STATEMENT) {
            if (!_.isArray(block.STATEMENT)) {
                block.STATEMENT = [block.STATEMENT];
            }

            block.STATEMENT.forEach((statement) => {
                output[statement['@attributes'].name] = WorkspaceUtils.append({}, statement.BLOCK);
            });
        }

        return output;
    }

    // TODO: method that constructs blocks from java
    static blockFromJava(classSpec) {

    }
}

export class ClassSpec {
    constructor(fields, {name}) {
        this.fields = fields;
        this.name = name;
    }

    toBlock() {
        let spec = this;
        return {
            init: function () {
                let block = this;
                block.appendDummyInput()
                    .appendField(spec.name);

                spec.fields.forEach((field) => {
                    let input = null;

                    if (field.isStatement()) {
                        input = block.appendStatementInput(field.key);
                        let type = ClassSpec.types[field.parserValueType];
                        input.setCheck(type);
                        input.appendField(field.key);
                    } else {
                        input = block.appendDummyInput();
                        input.appendField(field.key);
                        input.appendField(field.getBlocklyField(), field.key);
                    }
                });

                block.setPreviousStatement(true, null);
                block.setInputsInline(false);
                block.setColour(210);
                block.setTooltip('');
                block.setHelpUrl('');
            }
        }

    }
}

ClassSpec.types = {
    [ParserValueType.SPELL]: 'SpellDesc',
    [ParserValueType.SPELL_ARRAY]: 'SpellDesc[]',
    [ParserValueType.CONDITION]: 'ConditionDesc',
    [ParserValueType.CONDITION_ARRAY]: 'ConditionDesc[]',
    [ParserValueType.TRIGGER]: 'TriggerDesc',
    [ParserValueType.EVENT_TRIGGER]: 'EventTriggerDesc',
    [ParserValueType.CARD_COST_MODIFIER]: 'CardCostModifierDesc',
    [ParserValueType.CARD_SOURCE]: 'SourceDesc',
    [ParserValueType.VALUE_PROVIDER]: 'ValueProviderDesc',
    [ParserValueType.ENTITY_FILTER]: 'FilterDesc',
    [ParserValueType.ENTITY_FILTER_ARRAY]: 'FilterDesc[]'
};

export class FieldSpec {
    constructor({key, parserValueType, defaultValue = null}) {
        this.key = key;
        this.parserValueType = parserValueType;
        this.defaultValue = defaultValue;
    }

    isStatement() {
        return !!FieldSpec.statementValues[this.parserValueType];
    }

    getBlocklyField() {
        switch (this.parserValueType) {
            case ParserValueType.BOOLEAN:
                const defaultBoolean = _.isUndefined(this.defaultValue) ? 'FALSE' :
                    (this.defaultValue === true ? 'TRUE' : 'FALSE');
                return new Blockly.FieldCheckbox(defaultBoolean);
            case ParserValueType.VALUE:
            case ParserValueType.INTEGER:
                return new Blockly.FieldNumber(this.defaultValue.toString());
            case ParserValueType.TARGET_SELECTION:
                break;
            case ParserValueType.TARGET_REFERENCE:
                break;
            case ParserValueType.TARGET_PLAYER:
                break;
            case ParserValueType.RACE:
                break;
            case ParserValueType.ATTRIBUTE:
                break;
            case ParserValueType.PLAYER_ATTRIBUTE:
                break;
            case ParserValueType.STRING:
                return new Blockly.FieldTextInput(this.defaultValue);
            case ParserValueType.STRING_ARRAY:
                break;
            case ParserValueType.BOARD_POSITION_RELATIVE:
                break;
            case ParserValueType.CARD_LOCATION:
                break;
            case ParserValueType.OPERATION:
                break;
            case ParserValueType.ALGEBRAIC_OPERATION:
                break;
            case ParserValueType.CARD_TYPE:
                break;
            case ParserValueType.ENTITY_TYPE:
                break;
            case ParserValueType.ACTION_TYPE:
                break;
            case ParserValueType.TARGET_TYPE:
                break;
            case ParserValueType.RARITY:
                break;
            case ParserValueType.HERO_CLASS:
                return new Blockly.FieldDropdown(HeroClass.toBlocklyArray());
            case ParserValueType.HERO_CLASS_ARRAY:
                break;
            case ParserValueType.CARD_DESC_TYPE:
                break;
        }
    }
}

FieldSpec.statementValues = {
    [ParserValueType.SPELL]: true
};