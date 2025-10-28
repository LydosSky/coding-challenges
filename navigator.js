import assert from "node:assert/strict";

/**
 * Given an array of browser commands you executed on Web Browser, return the
 * current page you are on after executing all the commands using the following
 * rules:
 *   - You always start on the 'Home' page, which will not be included in the
 *   commands array.
 *   - Valid commands are:
 *      - 'Visit Page': Where 'Page' is the name of the page you are visiting.
 *      For example, 'Visit About' takes you to the 'About' page. When you
 *      visit a new page, make sure to discard any forward history you have.
 *      - 'Back': Takes you to the previous page in your history or stays on
 *      the current page if there isn't one.
 *      - 'Forward': Takes you forward in the history to the page you came
 *      from or stays on the current page if there isn't one.
 * */
function navigate(commands) {
    const history = ["Home"];
    let current = 0;
    return commands.reduce((prev, curr) => {
        let goto;
        if (curr.includes("Visit")) goto = curr.slice(6);
        else goto = curr;

        switch (goto) {
            case "Forward":
                if (history[current + 1]) current++;
                break;
            case "Back":
                if (history[current - 1]) current--;
                break;
            default:
                history.push(goto);
                current++;
        }

        return history[current];
    }, history[current]);
}

assert.equal(navigate(["Visit About Us", "Back", "Forward"]), "About Us");
assert.equal(navigate(["Forward"]), "Home");
assert.equal(navigate(["Back"]), "Home");
assert.equal(navigate(["Visit About Us", "Visit Gallery"]), "Gallery");
assert.equal(
    navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]),
    "Home",
);
assert.equal(
    navigate([
        "Visit About Us",
        "Visit Gallery",
        "Back",
        "Visit Contact",
        "Forward",
    ]),
    "Contact",
);
assert.equal(
    navigate([
        "Visit About Us",
        "Visit Visit Us",
        "Forward",
        "Visit Contact Us",
        "Back",
    ]),
    "Visit Us",
);
