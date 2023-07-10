import React, { useEffect, useState } from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebaseConfig.js';
import { collection, query, getDocs } from "firebase/firestore";


const CategoryPage = () => {
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
                        <ItemListContainer 
                            product = { product }
                        />
                   </div> 
                );
            })};
        </div>
   )
  
}

export default CategoryPage
