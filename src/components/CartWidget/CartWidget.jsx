import React, { useContext } from 'react'
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductContext } from '../../context/ProductContext';

const CartWidget = () => {
  const [products] = useContext(ProductContext);

  return (
    <div className='Carrito'>
        <ShoppingCartIcon sx={{color: 'white'}}/>
        <p>{products.length}</p>
    </div>
  )
}

export default CartWidget