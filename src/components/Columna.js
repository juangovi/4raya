import React from "react";
import { Casillas } from "./Casillas";
export const Columna = ({ index, columnas, dispatch }) => {

  const hundleclick = () => {
    dispatch({
      type: "play",
      payload: index,
    });
  };
  
  return (
    <div className="columna" onClick={hundleclick}>
      {columnas.map((casilla, index) => (
        <Casillas key={index} color={casilla} />
      ))}
    </div>
  );
};
