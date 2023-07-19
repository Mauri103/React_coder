import CartTable from '../../components/CartTable/CartTable'
import React, { useContext, useState } from 'react'
import { ProductContext } from '../../context/ProductContext';
import "./CartPage.css"
import Spinner from '../../components/Spinner/Spinner';


const CartPage = () => {
  const [ products ] = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className='cartPage'>
      {isLoading ? (<Spinner />) : 
      <div className='container justify-content-center mt-4 cart'>
        {products.length > 0 ? <CartTable /> : <h1 className='mt-5'>Tu carrito está vacío</h1>}
      </div>}
    </div>
  )
}

export default CartPage
