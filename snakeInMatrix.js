/**
 * Move snake on the nxn grid and return its last position.
 *
 * @param {number} n
 * @param {string[]} commands
 * @return {number} last position of snake
 * */
function finalPositionOfSnake(n, commands) {
  let gridX = 0;
  let gridY = 0;
  commands.forEach((command) => {
    switch (command) {
      case "UP":
        gridY--;
        break;
      case "DOWN":
        gridY++;
        break;
      case "RIGHT":
        gridX++;
        break;
      case "LEFT":
        gridX--;
        break;
      default:
        return;
    }
  });
  console.log(gridX);
  console.log(gridY);

  return gridX * n + gridY;
}

console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"]));
