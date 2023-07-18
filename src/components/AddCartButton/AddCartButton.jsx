import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import "./AddCartButton.css"



const AddCartButton = ({ product }) => {
  const [ products, addToCart ] = useContext(ProductContext);
  const add = () =>{
    addToCart(product);
  }

  return (
    <div className='addCart'>       
        <p onClick={add}>Agregar al carrito</p>
    </div>
  )
}

export default AddCartButton