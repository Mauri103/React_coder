import React from 'react'
import "./Header.css"
import logo from "./logo.jpg"

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo-pagina" />
    </div>
  )
}

export default Header