import React from 'react'
import data from "../../api.json"
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

const PantalonesPage = () => {

  let { id } = useParams();

  console.log(id)

  const findElement = (data, id) => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.id == id) {
        return element;
      }
    }
    return -1;
  }

  let producto = findElement(data, id);
 
   
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


