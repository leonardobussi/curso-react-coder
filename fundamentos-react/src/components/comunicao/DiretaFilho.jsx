import React from 'react';

const DiretaFilho = (props) => {
  return (
    <>
      <span>{props.texto} </span>
      <span>{props.numero} </span>
      <span>{props.bool ? 'Verdade' : 'Falso'}</span>
    </>
  )
}

export default DiretaFilho