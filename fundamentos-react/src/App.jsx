import React from "react"

import "./App.css"


import Card from "./components/layout/Card"
import Primeiro from "./components/basico/Primeiro"
import ComParametro from "./components/basico/ComParametro"
import Aleatorio from "./components/basico/Aleatorio"
import Familia from "./components/basico/Familia"
import FamiliaMembro from "./components/basico/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TableAlunos from "./components/repeticao/TableAlunos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import Usuarioinfo from "./components/condicional/Usuarioinfo"
import DiretaPai from "./components/comunicao/DiretaPai"

const App = () => {
  return (
    <div className="cards">

      <Card>
        <DiretaPai />
      </Card>

      <Card titulo="Components condicioanl - é par ou impar -  usuario" color="#345" >
        <Usuarioinfo usuario={{nome:"junin"}} />
      </Card>

      <Card titulo="Components condicioanl - é par ou impar" color="#670060" >
        <ParOuImpar numero={19} />
      </Card>

      <Card titulo="Components repetição em tabela" color="#361" >
        <TableAlunos />
      </Card>


      <Card titulo="Components repetição em lista" color="#009" >
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