import React, { useState, createContext } from 'react'

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) =>{
    const [products, setProducts] = useState([]);

    const addToCart = (element) => {
      const productrepeat = products.find((item) => item.id === element.id);

      if (productrepeat) {
        setProducts(products.map((item) => (item.id === element.id ? { ...element, quantity: productrepeat.quantity + 1 } : item)));
      } else {
        setProducts([...products, element]);
      }
    }
    
    const deleteItem = (element) => {
      const productrepeat = products.find((item) => item.id === element.id);
      productrepeat.quantity !== 1 && setProducts(products.map((item) => (item.id === element.id ? { ...element, quantity: productrepeat.quantity - 1 } : item)));
    }

    return(
        <ProductContext.Provider value={[products, addToCart, deleteItem, setProducts]}>  
           {children} 
        </ProductContext.Provider> 
    )
}