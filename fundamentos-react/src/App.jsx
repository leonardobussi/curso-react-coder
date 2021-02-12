import React from "react"

import "./App.css"


import Card from "./components/layout/Card"
import Primeiro from "./components/basico/Primeiro"
import ComParametro from "./components/basico/ComParametro"
import Aleatorio from "./components/basico/Aleatorio"
import Familia from "./components/basico/Familia"
import FamiliaMembro from "./components/basico/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"

const App = () => {
  return (
    <div className="cards">

      <Card titulo="Components repetição" color="#009" >
        <ListaAlunos/>
      </Card>


      <Card titulo="Components com filhos" color="#000" >
          <Familia sobrenome="Silva" >
          <FamiliaMembro nome="Pedro"  />
          <FamiliaMembro nome="Julia" />
          <FamiliaMembro nome="Douglas"  />
        </Familia>
      </Card>


      <Card titulo="Exercios numeros aleatorios" color="#071" >
        <Aleatorio min={2}  max={30} />
      </Card>

      <Card titulo="Passando parametro" color="#059">
        <ComParametro 
          titulo="olha o titulo"
          subtitulo="olha o subtitulo"
        />
      </Card>


      <Card titulo="primeiro component" color="#306">
        <Primeiro />
      </Card>
  </div>
  )
}

export default App