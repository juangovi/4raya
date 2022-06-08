import React, { useState } from "react";
import "../style/style.css";
import { Columna } from "./Columna";
export const Tablerocomponent = () => {
  const [casillas, setcasillas] = useState([
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ]);
  const [tur, settur] = useState(true);
  return (
    <div className="tablero">
      {casillas.map((columnas, index) => (
        <Columna
          columnas={columnas}
          cas={{ casillas, setcasillas }}
          index={index}
          turno={{tur,settur}}
          key={index}
        />
      ))}
    </div>
  );
};
