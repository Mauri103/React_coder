import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import "./HomePage.css"
import data from "../../api.json"
import { Link } from "react-router-dom";




const HomePage = () => {
    return(
        <div className='contenido'>       
            {data.map(producto => 
                <Link to={`detail/${producto.id}`}>
                    <ItemListContainer 
                        key={producto.id}
                        nombre={producto.nombre}
                        precio ={producto.precio}
                        categoria={producto.categoria}
                        imagen={producto.imagen}
                    />
                </Link>
            )}
            
            )
        </div>
    )
}
export default HomePage
