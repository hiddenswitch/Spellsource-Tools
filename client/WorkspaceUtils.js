/**
 * Created by bberman on 1/17/17.
 */
import * as Blockly from 'node-blockly/browser';

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
    };

    static workspaceToDictionary(workspace) {
        const xml = Blockly.Xml.workspaceToDom(workspace);
        const dictionary = WorkspaceUtils.xmlToDictionary(xml);

        let output = {};

        WorkspaceUtils.append(output, dictionary.BLOCK);

        return output;
    }

    static append(output, nextBlock) {

        // Handle the first block
        nextBlock.FIELD.forEach((field) => {
            output[field['@attributes'].name] = field['#text'];
        });

        if (!!nextBlock.NEXT) {
            // Continue appending to current output
            WorkspaceUtils.append(output, nextBlock.NEXT.BLOCK);
        }
    }
}