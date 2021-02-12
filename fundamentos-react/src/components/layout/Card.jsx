import React from "react"
import './Card.css'

const Card = (props) => {
  const style = {
    backgroundColor: props.color || "#800",
    borderColor: props.color || "#800"
  }

  return (
    <div className="card" style={style} >
      <div className="title" >{props.titulo}</div>
      <div className="content" >
        {props.children}
      </div>
    </div>
  )
}

export default Card