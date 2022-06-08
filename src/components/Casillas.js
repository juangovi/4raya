import React from 'react'

export const Casillas =({color}) => {

  return (
    <div className={`casilla ${color==null ? "" : color}`}></div>
  )
}
