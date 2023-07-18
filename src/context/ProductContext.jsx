import React, { useState, createContext } from 'react'

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) =>{
    const [products, setProducts] = useState([{category
      : 
      "Camisetas",
      categoryID
      : 
      "1",
      description
      : 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      id
      : 
      "Hu8iojOPhFcECRDiTi6I",
      image
      : 
      "https://firebasestorage.googleapis.com/v0/b/bunker-store-2dbd4.appspot.com/o/imagen4.png?alt=media&token=29c8861d-eaa4-414d-b558-57e7bfa8cf11",
      name
      : 
      "Camiseta Ratoncitos",
      price
      : 
      "650",
      quantity
      : 
      2}]);
    console.log(products)

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