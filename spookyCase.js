import assert from "node:assert/strict";

/**
 * Given a string representing a variable name, convert it to 'spooky case'
 * using the following constraints:
 *   - Replace all underscores(_), and hyphens(-) with a tilde(~).
 *   - Capitalize the first letter of the string, and every other letter after
 *   that, ignore the tilde character when counting.
 *
 * */
function spookify(boo) {
  const [sentence, count] = boo
    .replace(/[_-]/g, "~")
    .split("")
    .reduce(
      (prev, curr) => {
        let [word, idx] = prev;
        if (idx % 2 === 0) word += curr.toUpperCase();
        else word += curr.toLowerCase();
        if (curr !== `~`) idx += 1;

        return [word, idx];
      },
      ["", 0],
    );

  return sentence;
}

assert.equal(spookify("hello_world"), "HeLlO~wOrLd");
assert.equal(spookify("Spooky_Case"), "SpOoKy~CaSe");
assert.equal(spookify("TRICK-or-TREAT"), "TrIcK~oR~tReAt");
assert.equal(spookify("c_a-n_d-y_-b-o_w_l"), "C~a~N~d~Y~~b~O~w~L");
assert.equal(
  spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"),
  "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS",
);
