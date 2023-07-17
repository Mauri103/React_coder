import * as React from "react";
import "./ItemDetailContainer.css"
import AddCartButton from "../AddCartButton/AddCartButton";


const ItemDetailConteiner = ({ product }) => {

  return (
    <div className="container detail">
        <div className="imagenProducto">
          <img src={product.image} alt=""/>
        </div>      
        <div className="propiedades">
          <div>
              <h1>{product.name}</h1>
          </div>
          <div>
              <p>{product.description}</p>
          </div>
          <div className="price">
              <h3>$ {product.price}</h3>
          </div>
          <div>
            <AddCartButton product={product}/>
          </div>
        </div>
        
    </div>
  )

};

export default ItemDetailConteiner
