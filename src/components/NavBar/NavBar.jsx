import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link className="li" to="/">Inicio</Link>
        <Link className="li" to="/category/2">Pantalones</Link>
        <Link className="li" to="/category/1">Remeras</Link>
      </ul>
    </nav>
    
  )
}

export default Navbar