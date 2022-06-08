import React, {useReducer} from "react";
import "../style/style.css";
import { Columna } from "./Columna";
import { tableroReducer } from "../reducers/tableroReducer";
export const Tablerocomponent = () => {
  const init = () => {
    return {tablero:[
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      turno:true,
      win:false
    }};
  const [state, dispatch] = useReducer(tableroReducer, init());
  return (
    <div>
      <div className="tablero">
        {state.tablero.map((columnas, index) => (
          <Columna
            columnas={columnas}
            dispatch={dispatch}
            index={index}
            key={index}
          />
        ))}
      </div>
      <button onClick={() => dispatch({ type: "reset", payload: init() })}>
        reset
      </button>
      {state.win ? <div>{state.turno ? "jugador 1 " : "jugador 2 "}has ganado</div>: null}
    </div>
  );
};
