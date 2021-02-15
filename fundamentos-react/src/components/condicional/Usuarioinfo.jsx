import React from 'react'
import If from "./if"

const Usuarioinfo = (props) => {
  const usuario = props.usuario || {}

  return (
    <>
      <If test={usuario && usuario.nome}  >
        <span>Seja bem-vindo <strong>{usuario.nome}</strong> </span>
      </If>
      <If test={!usuario || !usuario.nome}  >
        <span>Bom dia amigao</span>
      </If>
    </>
  )
}
export default Usuarioinfo