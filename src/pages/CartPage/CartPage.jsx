import CartTable from '../../components/CartTable/CartTable'
import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import "./CartPage.css"


const CartPage = () => {
  const [ products ] = useContext(ProductContext);

  return (
    <div className='container justify-content-center mt-4 cart'>
      {products.length > 0 ? <CartTable /> : <h1>Tu carrito está vacío</h1>}
    </div>
  )
}

export default CartPage
