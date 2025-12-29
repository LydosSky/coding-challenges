import assert from "assert/strict";

/**
 *  Given a string representing a variable name, return the variable name
 *  converted to SCREAMING_SNAKE_CASE.
 *
 *  @param {string} variable
 *  @returns {string}
 * */
function toScreamingSnakeCase(variable) {
    let split = [];
    if (variable.includes("-")) split = variable.split("-");
    else if (variable.includes("_")) split = variable.split("_");
    else {
        let word = "";
        for (let i = 0; i < variable.length; i++)
            if (/[A-Z]/.test(variable[i]) && word.length > 0) {
                split.push(word);
                word = variable[i];
            } else word += variable[i];

        split.push(word);
    }

    return split.map((v) => v.toUpperCase()).join("_");
}

assert.equal(toScreamingSnakeCase("userEmail"), "USER_EMAIL");
assert.equal(toScreamingSnakeCase("UserPassword"), "USER_PASSWORD");
assert.equal(toScreamingSnakeCase("user_id"), "USER_ID");
assert.equal(toScreamingSnakeCase("user-address"), "USER_ADDRESS");
assert.equal(toScreamingSnakeCase("username"), "USERNAME");
