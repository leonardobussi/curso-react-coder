import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = (props) =>  {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about" >Sobre</Link>
          </li>
          <li>
            <Link to="/param/leo">Param</Link>
          </li>
          <li>
            <Link to="/naovinada">não vi nada</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;