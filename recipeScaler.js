import assert from "assert/strict";
/**
 *  Given an array of recipe ingredients and a number to scale the recipe,
 *  return an array with the quantities scaled accordingly.
 *    - Each item in the given array will be string in the format: 'quantity unit ingredient'
 *    - Scale the quantity by the given number. Do not include any trailing zeros and do not
 *    convert any units.
 *    - Return the scaled items in the same order they are given.
 *
 * */
function scaleRecipe(ingredients, scale) {
    return ingredients.map((curr) => {
        const [number, ...rest] = curr.split(" ");
        return `${+number * scale} ${rest.join(" ")}`;
    });
}

assert.deepEqual(scaleRecipe(["2 C Flour", "1.5 T Sugar"], 2), [
    "4 C Flour",
    "3 T Sugar",
]);
assert.deepEqual(scaleRecipe(["4 T Flour", "1 C Milk", "2 T Oil"], 1.5), [
    "6 T Flour",
    "1.5 C Milk",
    "3 T Oil",
]);
assert.deepEqual(scaleRecipe(["3 C Milk", "2 C Oats"], 0.5), [
    "1.5 C Milk",
    "1 C Oats",
]);
assert.deepEqual(
    scaleRecipe(
        [
            "2 C All-purpose Flour",
            "1 t Baking Soda",
            "1 t Salt",
            "1 C Butter",
            "0.5 C Sugar",
            "0.5 C Brown Sugar",
            "1 t Vanilla Extract",
            "2 C Chocolate Chips",
        ],
        2.5,
    ),
    [
        "5 C All-purpose Flour",
        "2.5 t Baking Soda",
        "2.5 t Salt",
        "2.5 C Butter",
        "1.25 C Sugar",
        "1.25 C Brown Sugar",
        "2.5 t Vanilla Extract",
        "5 C Chocolate Chips",
    ],
);
