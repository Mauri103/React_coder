import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";
import AccordionMenu from '../AccordionMenu/AccordionMenu';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
    <nav>
      <div className='container botones'>
        <div className='menu'>
          <Button className='menu' sx={{color: 'white'}}>
            <Link className="li" to="/">Inicio</Link>
          </Button>
        </div>
        
        <AccordionMenu />
      </div>

      <div className='cartWidget'>
        <CartWidget />
      </div>
    </nav>
    
  )
}

export default Navbar