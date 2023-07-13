import React from 'react'
import ItemList from '../../components/ItemList/ItemList.jsx'
import Carrousel from '../../components/Carrousel/Carrousel.jsx'
import "./HomePage.css"

const HomePage = () => {
    return(
        <div>    
           <Carrousel />
           <h3>Catálogo completo</h3>
           <ItemList />
        </div>
    )
}
export default HomePage
