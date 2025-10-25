import assert from "node:assert/strict";

/**
 * Given an array of song objects representing your iPod playlist, return an
 * array with the titles of the two most played songs, with the most played song
 * first.
 *   - Each objcet will have a "title" property(string), and a "plays" property
 *   (integer).
 * */
function favoriteSongs(playlist) {
    return playlist
        .sort((a, b) => b.plays - a.plays)
        .map((song) => song.title)
        .slice(0, 2);
}

assert.deepEqual(
    favoriteSongs([
        { title: "Sync or Swim", plays: 3 },
        { title: "Byte Me", plays: 1 },
        { title: "Earbud Blues", plays: 2 },
    ]),
    ["Sync or Swim", "Earbud Blues"],
);

assert.deepEqual(
    favoriteSongs([
        { title: "Skip Track", plays: 98 },
        { title: "99 Downloads", plays: 99 },
        { title: "Clickwheel Love", plays: 100 },
    ]),
    ["Clickwheel Love", "99 Downloads"],
);

assert.deepEqual(
    favoriteSongs([
        { title: "Song A", plays: 42 },
        { title: "Song B", plays: 99 },
        { title: "Song C", plays: 75 },
    ]),
    ["Song B", "Song C"],
);
