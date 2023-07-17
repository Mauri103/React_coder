import React, { useState, createContext } from 'react'

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) =>{
    const [products, setProducts] = useState([]);

    const addToCart = element => {
        setProducts([ ...products, element ]);
      }

    return(
        <ProductContext.Provider value={[products, addToCart]}>  
           {children} 
        </ProductContext.Provider> 
    )
}