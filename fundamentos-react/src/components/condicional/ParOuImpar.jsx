import React from 'react';

const ParOuImpar = (props) => {

  const resul = props.numero % 2 === 0 ? <span>Par</span> :  <span>Impar</span>

  return (
    <>
      {resul}
     
    </>
  )
}

export default  ParOuImpar