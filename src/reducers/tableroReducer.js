import checkWinner from "../utils/checkWinner";

export const tableroReducer = ({ tablero, turno, win }, action) => {
  switch (action.type) {
    case "play":
      if (!win) {
        for (let index = tablero.length; index >= 0; index--) {
          if (tablero[action.payload][index] === null) {
            tablero[action.payload][index] = turno ? "red" : "yellow";
            win = checkWinner(tablero, turno);
            if (!win) {
              turno = !turno;
            }
            break;
          }
        }
      }
      return { tablero, turno, win };
    case "reset":
      return action.payload;
    default:
      break;
  }
};
