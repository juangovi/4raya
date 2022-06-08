import React, { useState } from "react";
import { Casillas } from "./Casillas";

export const Columna = ({ index, columnas, cas, turno }) => {
  const { casillas, setcasillas } = cas;
  const { tur, settur } = turno;
  const [contador, setcontador] = useState(5);
  const checktable = (casillas, tur) => {
    const player = tur ? "red" : "yellow";
    for (let row = 0; row < casillas.length; row++) {
      for (let col = 0; col < casillas[row].length - 3; col++) {
        if (
          casillas[row][col] === player &&
          casillas[row][col + 1] === player &&
          casillas[row][col + 2] === player &&
          casillas[row][col + 3] === player
        ) {
          return true;
        }
      }
    }
    for (let row = 0; row < casillas.length - 3; row++) {
      for (let col = 0; col < casillas[row].length; col++) {
        if (
          casillas[row][col] === player &&
          casillas[row + 1][col] === player &&
          casillas[row + 2][col] === player &&
          casillas[row + 3][col] === player
        ) {
          return true;
        }
      }
    }
    for (let row = 3; row < casillas.length; row++) {
      for (let col = 0; col < casillas[0].length-3; col++) {
        if (
          casillas[row][col] === player &&
          casillas[row - 1][col + 1] === player &&
          casillas[row - 2][col + 2] === player &&
          casillas[row - 3][col + 3] === player
        ) {
          return true;
        }
      }
    }
    for (let row = 0; row < casillas.length-3; row++) {
      for (let col = 0; col < casillas[0].length-3; col++) {
        if (
          casillas[row][col] === player &&
          casillas[row + 1][col + 1] === player &&
          casillas[row + 2][col + 2] === player &&
          casillas[row + 3][col + 3] === player
        ) {
          return true;
        }
      }
    }
  };
  const hundleclick = () => {
    var newcasillas = casillas;
    newcasillas[index][contador] = tur ? "red" : "yellow";
    setcasillas(newcasillas);
    setcontador(contador - 1);
    if (checktable(casillas, tur)) {
      window.alert("a");
    }
    settur(!tur);
  };
  return (
    <div className="columna" onClick={hundleclick}>
      {columnas.map((casilla, index) => (
        <Casillas key={index} color={casilla} />
      ))}
    </div>
  );
};
