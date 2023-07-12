import React, { useState , useEffect} from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx'
import { Link } from "react-router-dom";
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
    })

  return (
        <div className='contenido'>       
            {filtroCategoria.map(( product ) => {
                return(
                    <div key={product.id}>
                        <Link to={`/detail/${product.id}`}>
                            <ItemListContainer 
                                product = { product }
                            />
                        </Link>
                   </div> 
                )
            })}
        </div>
   )
}

export default ItemCategory
