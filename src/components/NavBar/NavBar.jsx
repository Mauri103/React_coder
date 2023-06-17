import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";
import CarritoDeCompras from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link className="li" to="/">Inicio</Link>
        <Link className="li" to="/category/2">Pantalones</Link>
      </ul>
    </nav>
    
  )
}

export default Navbar