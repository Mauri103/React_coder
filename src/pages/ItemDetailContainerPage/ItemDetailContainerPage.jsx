import React, { useState , useEffect }from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'
import axios from "axios"


const PantalonesPage = () => {

    let { id } = useParams();

    const url = "http://localhost:3000/api.json"
    const [productos, setProduct] = useState([]);

    useEffect(() => {
      axios(url).then(json => 
        setProduct(json.data.products));
    }, []);


    let filtroProductos = productos.filter((producto) => {
      return producto.id == id;
    })
   
    return (
      <div className='contenido'>       
            {filtroProductos.map(( producto ) => {
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


