import * as React from "react";
import Button from '@mui/material/Button';
import "./ItemDetailContainer.css"

const ItemDetailConteiner = ({ product }) => {
  return (
    <div className="detail">  
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
            <Button variant="contained" color="primary">
                Agregar al carrito
            </Button>
          </div>
        </div>
        
    </div>
  )

};

export default ItemDetailConteiner
