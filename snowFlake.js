import assert from "assert/strict";

/**
 *  Given a multi-line string that uses newline characters (\n) to represent
 *  a line break return a new string where each line is mirrored horizontally
 *  and attached to the end of the original line.
 *
 *  - Mirror a line by reversing all of its characters, including spaces.
 * */
function generateSnowFlakes(crystals) {
    let newCrystals = "";
    let tillBreak = "";
    for (let i = 0; i < crystals.length; i++) {
        if (crystals[i] === "\n") {
            newCrystals += tillBreak;
            newCrystals += "\n";
            tillBreak = "";
        } else {
            newCrystals += crystals[i];
            tillBreak = crystals[i] + tillBreak;
        }
    }

    newCrystals += tillBreak;

    return newCrystals;
}

assert.equal(generateSnowFlakes("* \n *\n* "), "*  *\n ** \n*  *");
assert.equal(generateSnowFlakes("X=~"), "X=~~=X");
assert.equal(
    generateSnowFlakes(" X  \n  v \nX--=\n  ^ \n X  "),
    " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ",
);
assert.equal(
    generateSnowFlakes("*   *\n * * \n* * *\n * * \n*   *"),
    "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *",
);
assert.equal(
    generateSnowFlakes("*  -\n * -\n*  -"),
    "*  --  *\n * -- * \n*  --  *",
);
