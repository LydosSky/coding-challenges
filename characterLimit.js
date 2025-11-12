import assert from "assert/strict";

/**
 * Given a string determine if it fits in a social media post. Returns
 * the following strings based on the rules:
 *   - 'short post' if it fits within a 40 character limit.
 *   - 'long post' if it's greater than 40 characters and fits
 *   within and 80 character limit.
 *   - 'invalid post' if it's too long to fit within either limit.
 *   @param {string} post
 *   @return {string}
 * */
function canPost(post) {
    return post.length < 40
        ? "short post"
        : post.length >= 40 && post.length < 80
          ? "long post"
          : "invalid post";
}

assert.equal(canPost("Hello world"), "short post");
assert.equal(
    canPost("This is a longer message but still under eighty characters."),
    "long post",
);
assert.equal(
    canPost(
        "This message is too long to fit into either of the character limits for a social media post.",
    ),
    "invalid post",
);
