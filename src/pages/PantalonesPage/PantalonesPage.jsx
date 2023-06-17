import React from 'react'
import data from "../../api.json"
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const PantalonesPage = () => {

  const findElement = (data, categoria) => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.categoria === categoria) {
        return element;
      }
    }
    return -1;
  }

  let producto = findElement(data, "Pantalon")
   
  return (
    <div className='contenido'>              
          <ItemListContainer 
             key={producto.id}
             nombre={producto.nombre}
             precio ={producto.precio}
             categoria={producto.categoria}
             imagen={producto.imagen}
            />
     </div>
   )
  
}

export default PantalonesPage
