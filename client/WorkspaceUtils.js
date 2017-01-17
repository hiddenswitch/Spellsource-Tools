/**
 * Created by bberman on 1/17/17.
 */
var k;

export default class WorkspaceUtils {
    static xmlToJson(xml) {
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
                    obj[nodeName] = WorkspaceUtils.xmlToJson(item);
                } else {
                    if (typeof(obj[nodeName].push) == "undefined") {
                        const old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(WorkspaceUtils.xmlToJson(item));
                }
            }
        }
        return obj;
    };

    static workspaceToJSON(workspace) {
        let jsonString = "";
        // gets the single block at the start of the workspace
        const blocks = workspace.getTopBlocks(true);
        //console.log(blocks.toString());
        blocks.forEach((block) => {
            jsonString += "{\n";
            jsonString += "\"id\": \"" + block.getFieldValue("id") + "\",\n";
            jsonString += "\"name\": \"" + block.getFieldValue("name") + "\",\n";
            jsonString += "\"description\": \"" + block.getFieldValue("description") + "\",\n";
            jsonString += "\"heroClass\": \"" + block.getFieldValue("HeroClass") + "\",\n";
            jsonString += "\"rarity\": \"" + block.getFieldValue("Rarity") + "\",\n";
            jsonString += "\"set\": \"" + block.getFieldValue("set") + "\",\n";
            jsonString += "\"baseManaCost\": " + block.getFieldValue("baseManaCost") + ",\n";
            jsonString += "\"collectible\": " + block.getFieldValue("collectible") + ",\n";
            jsonString += "\"fileFormatVersion\": " + block.getFieldValue("fileFormatVersion") + ",\n";

            const children = block.getChildren();
            children.forEach((child) => {
                //console.log(child.toString());
                if (child.type == "minioncarddesc") {
                    jsonString += "\"type\": \"MINION\"" + ",\n";
                    jsonString += "\"baseAttack\": " + child.getFieldValue("baseAttack") + ",\n";
                    jsonString += "\"baseHp\": " + child.getFieldValue("baseHp") + ",\n";
                    jsonString += "\"race\": \"" + child.getFieldValue("race") + "\",\n";
                    const test = child.getChildren()[0];
                    //console.log("test0:", test);
                    //console.log("Test:", test.toString());
                    // var descendent = child.getNextBlock();
                    if (test.type == "battlecrydesc") {
                        jsonString += "\"battlecry\": {" + "\n";
                        jsonString += "\"targetSelection\": \"" + test.getFieldValue("TargetSelection") + "\",\n";
                        const d2 = test.getChildren()[0];
                        //console.log("d2:", d2.toString());
                        if (d2.type == "damagespelldesc") {
                            jsonString += "\"spell\": {" + "\n";
                            jsonString += "\"class\": \"DamageSpell\"" + ",\n";
                            jsonString += "\"value\": " + d2.getFieldValue("value") + "\n";
                            jsonString += "}" + "\n";
                            jsonString += "}" + "\n";
                        }
                    }
                }
            });
        });
        return jsonString;
    }
}