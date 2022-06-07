import React, { useState } from "react";
import { Casillas } from "./Casillas";

export const Columna = ({ index, columnas, cas ,turno}) => {
  const { casillas, setcasillas } = cas;
  const {tur, settur} = turno;
  const [contador, setcontador] = useState(5)
  const hundleclick = () => {

    var newcasillas = casillas;
    newcasillas[index][contador]=tur ? "red" : "yellow"
    settur(!tur)
    setcasillas(newcasillas);
    setcontador(contador-1)
    
  };
  return (
    <div className="columna" onClick={hundleclick}>
      {columnas.map((casilla, index) => (
        <Casillas key={index} color={casilla}/>
      ))}
    </div>
  );
};
