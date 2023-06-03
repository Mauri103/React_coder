import React from 'react'
import "./NavBar.css"
import CarritoDeCompras from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href='www.google.com'>Inicio</a></li>
        <li><a href='www.youtube.com'>Catalogo</a></li>
        <li><a href='www.github.com'>Contacto</a></li>
        <li><CarritoDeCompras /></li>
      </ul>
    </nav>
    
  )
}

export default Navbar