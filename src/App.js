import React, { Component } from "react";
import './App.css';

import Header from "./components/Header/Header";
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div>
            <ItemListContainer greeting= "Aprendiendo React con Coder"/>
        </div>
      </div>
      
    )
  }
}


export default App;
