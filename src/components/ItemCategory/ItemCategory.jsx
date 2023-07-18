import React, { useState , useEffect} from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebaseConfig.js';
import { collection, query, getDocs } from "firebase/firestore";
import "./ItemCategory.css"

const ItemCategory = () => {
    let { categoryId } = useParams();

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


    let filtroCategoria = products.filter((product) => {
      return product.categoryID === categoryId;
    });

    const titulo = () => {
        if(categoryId === "1"){
            return <h2>Camisetas</h2>
        }else if(categoryId === "2"){
            return <h2>Pantalones</h2>
        }else{
            return <h2>Lo sentimos, la categoría que buscas no existe</h2>
        }
    }
  
    return (
    <div>
        <div className='container titulo'>
            {titulo()}
        </div>
        <div className='container-fluid contenido'>   
            {filtroCategoria.map(( product ) => {
                return(
                    <div className='carts' key={product.id}>
                            <ItemListContainer 
                                product = { product }
                            />
                   </div> 
                )
            })}
        </div>
    </div>
   )
}

export default ItemCategory
