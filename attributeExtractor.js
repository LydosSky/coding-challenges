import assert from "node:assert/strict";

/**
 * Given a string of valid HTML element, return the attributes of the element
 * using the following criteria:
 * - You will only be given one element.
 * - Attributes will be in the format: attribute="value".
 * - Return an array of strings with each attribute property and
 * value, separated by a comma, in this format:
 *  ["attribute1, value1", "attribute2, value2"]
 * - Return attributes in the order they are given.
 * - If no attributes are found, return an empty array.
 *
 * */
function extractAttributes(element) {
    const attributes = [];
    let inTag = false;
    for (let i = 0; i < element.length; i++) {
        if (element[i] === "<") inTag = true;
        if (inTag)
            if (element[i] === "=") {
                let attribute = "";
                let value = "";

                let j = i - 1;
                while (element[j] !== " ") {
                    attribute = element[j--] + attribute;
                }

                j = i + 2;
                let inValue = true;
                while (inValue) {
                    if (element[j] === '"') inValue = false;
                    if (inValue) value += element[j++];
                }
                attributes.push(attribute + ", " + value);
            }
        if (element[i] === ">") inTag = false;
    }
    return attributes;
}

assert.deepEqual(extractAttributes('<span class="red"></span>'), [
    "class, red",
]);
assert.deepEqual(extractAttributes('<meta charset="UTF-8"/>'), [
    "charset, UTF-8",
]);
assert.deepEqual(extractAttributes("<p>Lorem ipsum dolor sit amet</p>"), []);
assert.deepEqual(
    extractAttributes('<input name="email" type="email" required="true" />'),
    ["name, email", "type, email", "required, true"],
);
assert.deepEqual(
    extractAttributes(
        '<button id="submit" class="btn btn-primary">Submit</button>',
    ),
    ["id, submit", "class, btn btn-primary"],
);
