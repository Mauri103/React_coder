import React, { useState , useEffect }from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx';
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebaseConfig.js';
import { collection, query, getDocs } from "firebase/firestore";
import "./ItemDetail.css";

const ItemDetail = () => {
    let { id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
        const q = query(collection(db, "productsCollection"));
        const docs = [];
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
        };
        getProducts();
    }, []);


    let filtroProductos = products.filter((product) => {
      return product.id === id;
    })
   
    return (
      <div>      
            {filtroProductos.map(( product ) => {
                return(
                    <div className='' key={product.id}>
                        <div>
                            <ItemDetailContainer 
                                product = { product }
                            />
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}

export default ItemDetail
