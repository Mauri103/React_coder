import React from 'react'
import "./Header.css"
import logo from "../../assets/img/logo_bunker.avif"
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img src={logo} alt="logo-pagina" />
      </Link>
    </div>
  )
}

export default Header