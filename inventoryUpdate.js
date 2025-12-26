import assert from "assert/strict";

/**
 * Given a 2D array representing the inventory of your store, and another 2D
 * array representing a shipment you have received, return your updated inven
 * tory.
 *
 * @param {Array<[number, string]>} inventory
 * @param {Array<[number,string]>} update
 * @returns {Array<[number,string]>}
 * */
function updateInventory(inventory, update) {
    for (let u of update) {
        let found = false;
        for (let i of inventory) {
            if (u[1] == i[1]) {
                i[0] += u[0];
                found = true;
            }
        }
        if (!found) inventory.push(u);
    }

    return inventory;
}

assert.deepEqual(
    updateInventory(
        [
            [2, "apples"],
            [5, "bananas"],
        ],
        [
            [1, "apples"],
            [3, "bananas"],
        ],
    ),
    [
        [3, "apples"],
        [8, "bananas"],
    ],
);
assert.deepEqual(
    updateInventory(
        [
            [2, "apples"],
            [5, "bananas"],
        ],
        [
            [1, "apples"],
            [3, "bananas"],
            [4, "oranges"],
        ],
    ),
    [
        [3, "apples"],
        [8, "bananas"],
        [4, "oranges"],
    ],
);
assert.deepEqual(
    updateInventory(
        [],
        [
            [10, "apples"],
            [30, "bananas"],
            [20, "oranges"],
        ],
    ),
    [
        [10, "apples"],
        [30, "bananas"],
        [20, "oranges"],
    ],
);
assert.deepEqual(
    updateInventory(
        [
            [0, "Bowling Ball"],
            [0, "Dirty Socks"],
            [0, "Hair Pin"],
            [0, "Microphone"],
        ],
        [
            [1, "Hair Pin"],
            [1, "Half-Eaten Apple"],
            [1, "Bowling Ball"],
            [1, "Toothpaste"],
        ],
    ),
    [
        [1, "Bowling Ball"],
        [0, "Dirty Socks"],
        [1, "Hair Pin"],
        [0, "Microphone"],
        [1, "Half-Eaten Apple"],
        [1, "Toothpaste"],
    ],
);
