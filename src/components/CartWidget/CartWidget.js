import React from 'react'
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = () => {
  return (
    <div className='Carrito'>
        <ShoppingCartIcon />
        <p>3</p>
    </div>
  )
}

export default CartWidget