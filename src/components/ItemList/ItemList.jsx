import React, { useState , useEffect} from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx'
import { db } from '../../firebase/firebaseConfig.js';
import { collection, query, getDocs } from "firebase/firestore";
import "./ItemList.css"


const ItemList = () => {
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

    
    return(
        <div className='cpnteiner-fluid contenido'>       
            {products.map(( product ) => {
                return(
                    <div className='carts' key={product.id}>
                            <ItemListContainer product = { product }  />                        
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList
