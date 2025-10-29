import assert from "node:assert/strict";

/**
 * In this challenge, you are given a list of email addresses and need to
 * sort them alphabetically by domain name first, and username second.
 *   - Sorting should be case-insensitive
 *   - If more than one email has the same domain, sort them by their
 *   username.
 *   - Return an array of the sorted addresses.
 *   - Returned addresses should retain their original case.
 * */
function sort(emails) {
    return emails
        .map((email) => email.split("@"))
        .sort(([userleft, domainleft], [userright, domainright]) => {
            if (domainleft.toLowerCase() === domainright.toLowerCase())
                return userleft.localeCompare(userright, "en", {
                    sensitivity: "base",
                });
            else
                return domainleft.localeCompare(domainright, "en", {
                    sensitivity: "base",
                });
        })
        .map((email) => email.join("@"));
}

assert.deepEqual(
    sort(["jill@mail.com", "john@example.com", "jane@example.com"]),
    ["jane@example.com", "john@example.com", "jill@mail.com"],
);
assert.deepEqual(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]), [
    "bob@mail.com",
    "carol@mail.com",
    "alice@zoo.com",
]);

assert.deepEqual(sort(["user@z.com", "user@y.com", "user@x.com"]), [
    "user@x.com",
    "user@y.com",
    "user@z.com",
]);
assert.deepEqual(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]), [
    "amy@mail.COM",
    "bob@Mail.com",
    "sam@MAIL.com",
]);

assert.deepEqual(
    sort([
        "simon@beta.com",
        "sammy@alpha.com",
        "Sarah@Alpha.com",
        "SAM@ALPHA.com",
        "Simone@Beta.com",
        "sara@alpha.com",
    ]),
    [
        "SAM@ALPHA.com",
        "sammy@alpha.com",
        "sara@alpha.com",
        "Sarah@Alpha.com",
        "simon@beta.com",
        "Simone@Beta.com",
    ],
);
