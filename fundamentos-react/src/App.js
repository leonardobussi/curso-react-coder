import React from "react"
import Primeiro from "./components/basico/Primeiro"
import ComParametro from "./components/basico/ComParametro"

const App = () => {
  return (
    <>
      <h1>Fundamentos</h1>
      <Primeiro />
      < ComParametro 
        titulo="olha o titulo"
        subtitulo="olha o subtitulo"
      />

  </>
  )
}

export default App