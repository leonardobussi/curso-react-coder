import React from 'react';
import produtos from '../../data/produtos'

const TableAlunos = (props) => {

  const tab = produtos.map(prod => {
    return (
      
      <tr key={prod.id} >
        <td>
          {prod.id}
        </td>  
        <td>
          {prod.nome}
        </td>
        <td>
         {prod.preco}
        </td>
      </tr>
      
    )
  })

  return (
    <>
      <table border="1" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {tab}
        </tbody>
      </table>
    </>
  )
}


export default TableAlunos