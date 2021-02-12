import React from 'react';
import alunos from '../../data/alunos'

const ListaAlunos = (props) => {

  const lis = alunos.map(aluno => {
    return (
      
      <li key={aluno.id} >{aluno.id})  {aluno.nome} - Nota: {aluno.nota}</li>
      
    )
  })

  return (
    <>
      <ul style={{listStyle: "none"}} >
       {lis}
      </ul>
    </>
  )
}

export default ListaAlunos