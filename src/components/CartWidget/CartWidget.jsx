import React, { useContext } from 'react'
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductContext } from '../../context/ProductContext';

const CartWidget = () => {
  let cantidadTotal = 0;

  const [products] = useContext(ProductContext);
  products.map(product => (
    cantidadTotal = cantidadTotal + product.quantity
  ))
  

  return (
    <div className='Carrito'>
        <ShoppingCartIcon sx={{color: 'white'}}/>
        <p>{cantidadTotal}</p>
    </div>
  )
}

export default CartWidget