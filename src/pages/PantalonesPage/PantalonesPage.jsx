import React, { useEffect, useState } from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import axios from "axios"
import { useParams } from 'react-router-dom'


const PantalonesPage = () => {

    const url = "http://localhost:3000/api.json"
    const [productos, setProduct] = useState([]);

    let { categoryId } = useParams();

    console.log(categoryId)

    useEffect(() => {
      axios(url).then(json => 
        setProduct(json.data.products));
    }, []);


    let filtroCategoria = productos.filter((producto) => {
      return producto.category == categoryId;
    })

  
   
  return (
    <div className='contenido'>       
            {filtroCategoria.map(( producto ) => {
                return(
                    <div key={producto.id}>
                        <ItemListContainer 
                            producto = { producto }
                        />
                   </div> 
                );
            })};
        </div>
   )
  
}

export default PantalonesPage
