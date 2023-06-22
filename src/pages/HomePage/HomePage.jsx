import React, { useState , useEffect} from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx'
import "./HomePage.css"
import axios from "axios"
import { Link } from "react-router-dom";




const HomePage = () => {

    const url = "http://localhost:3000/api.json"
    const [productos, setProduct] = useState([]);

    useEffect(() => {
      axios(url).then(json => 
        setProduct(json.data.products));
    }, []);

    return(
        <div className='contenido'>       
            {productos.map(( producto ) => {
                return(
                    <div key={producto.id}>
                        <Link to={`detail/${producto.id}`}>
                            <ItemListContainer 
                                producto = { producto }
                            />
                        </Link>
                    </div>
                );
            })};
        </div>
    )
}
export default HomePage
