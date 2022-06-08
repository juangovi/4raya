const checkWinner = (tablero, turno) => {
  const player = turno ? "red" : "yellow";
  for (let row = 0; row < tablero.length; row++) {
    for (let col = 0; col < tablero[row].length - 3; col++) {
      if (
        tablero[row][col] === player &&
        tablero[row][col + 1] === player &&
        tablero[row][col + 2] === player &&
        tablero[row][col + 3] === player
      ) {
        tablero[row][col] = player + " border";
        tablero[row][col + 1] = player + " border";
        tablero[row][col + 2] = player + " border";
        tablero[row][col + 3] = player + " border";
        return true;
      }
    }
  }
  for (let row = 0; row < tablero.length - 3; row++) {
    for (let col = 0; col < tablero[row].length; col++) {
      if (
        tablero[row][col] === player &&
        tablero[row + 1][col] === player &&
        tablero[row + 2][col] === player &&
        tablero[row + 3][col] === player
      ) {
        tablero[row][col] = player + " border";
        tablero[row + 1][col] = player + " border";
        tablero[row + 2][col] = player + " border";
        tablero[row + 3][col] = player + " border";
        return true;
      }
    }
  }
  for (let row = 3; row < tablero.length; row++) {
    for (let col = 0; col < tablero[0].length - 3; col++) {
      if (
        tablero[row][col] === player &&
        tablero[row - 1][col + 1] === player &&
        tablero[row - 2][col + 2] === player &&
        tablero[row - 3][col + 3] === player
      ) {
        tablero[row][col] = player + " border";
        tablero[row - 1][col + 1] = player + " border";
        tablero[row - 2][col + 2] = player + " border";
        tablero[row - 3][col + 3] = player + " border";
        return true;
      }
    }
  }
  for (let row = 0; row < tablero.length - 3; row++) {
    for (let col = 0; col < tablero[0].length - 3; col++) {
      if (
        tablero[row][col] === player &&
        tablero[row + 1][col + 1] === player &&
        tablero[row + 2][col + 2] === player &&
        tablero[row + 3][col + 3] === player
      ) {
        tablero[row][col] = player + " border";
        tablero[row + 1][col + 1] = player + " border";
        tablero[row + 2][col + 2] = player + " border";
        tablero[row + 3][col + 3] = player + " border";
        return true;
      }
    }
  }
  return false;
};
export default checkWinner;
