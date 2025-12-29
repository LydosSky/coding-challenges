import assert from "assert/strict";

/**
 *  Given two strings, the first representing Player 1 and the second
 *  representing Player 2, determines the winner of a match of Rock,
 *  Paper, Scissors.
 *
 *  @param {string} player1
 *  @param {string} player2
 *  @returns {string}
 * */
function rockPaperScissors(player1, player2) {
    if (player1 === player2) return "Tie";
    const oneWins = [
        ["Rock", "Scissors"],
        ["Paper", "Rock"],
        ["Scissors", "Paper"],
    ];

    for (let win of oneWins) {
        if (win[0] === player1 && win[1] === player2) return "Player 1 wins";
    }

    return "Player 2 wins";
}

assert.equal(rockPaperScissors("Rock", "Rock"), "Tie");
assert.equal(rockPaperScissors("Rock", "Paper"), "Player 2 wins");
assert.equal(rockPaperScissors("Scissors", "Paper"), "Player 1 wins");
assert.equal(rockPaperScissors("Rock", "Scissors"), "Player 1 wins");
assert.equal(rockPaperScissors("Scissors", "Scissors"), "Tie");
assert.equal(rockPaperScissors("Scissors", "Rock"), "Player 2 wins");
