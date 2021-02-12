import React from "react"

const Aleatorio = (props) => {
  const {min, max} = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min 
  return (
    <>
    <h1>numero aleatorio</h1>
    <p>valor minimo {min}</p>
    <p>valor maximo {max}</p>

    <span>o valor aleatorio é {aleatorio}</span>
    </>
  )
}

export default Aleatorio