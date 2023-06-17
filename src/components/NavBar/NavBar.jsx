import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";
import CarritoDeCompras from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link className="li" to="/">Inicio</Link>
        <Link className="li" to="/contacto">Contacto</Link>
        <Link className="li" to="/detalle">Detalle</Link>
      </ul>
    </nav>
    
  )
}

export default Navbar