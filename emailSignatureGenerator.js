import assert from "assert/strict";

/***
 * Given strings for a person's name, title, and company, return an email
 * signature as a single string using the following rules:
 *   - The name should appear first, preceded by a prefix that depends
 *   on the first letter of the name. For names starting with (case-insensitive)
 *     - A-I: Use >> as the prefix
 *     - J-R: Use -- as the prefix
 *     - S-Z: Use :: as the prefix
 *   - A comma and space (, ) should follow the name.
 *   - The title and company should follow the comma and space,
 *   separated by " at " (with spaces around it).
 *
 */
function generateSignature(name, title, company) {
    let prefix = "";
    if (/[a-i]/i.test(name[0])) prefix += ">>";
    else if (/[j-r]/i.test(name[0])) prefix += "--";
    else if (/[s-z]/i.test(name[0])) prefix += "::";

    return `${prefix}${name}, ${title} at ${company}`;
}

assert.equal(
    generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"),
    "--Quinn Waverly, Founder and CEO at TechCo",
);

assert.equal(
    generateSignature("Alice Reed", "Engineer", "TechCo"),
    ">>Alice Reed, Engineer at TechCo",
);

assert.equal(
    generateSignature("Tina Vaughn", "Developer", "example.com"),
    "::Tina Vaughn, Developer at example.com",
);

assert.equal(
    generateSignature("B. B.", "Product Tester", "AcmeCorp"),
    ">>B. B., Product Tester at AcmeCorp",
);

assert.equal(
    generateSignature("windstorm", "Cloud Architect", "Atmospheronics"),
    "::windstorm, Cloud Architect at Atmospheronics",
);
