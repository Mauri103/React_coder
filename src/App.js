import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import Header from "./components/Header/Header";
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";


const App  = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <ItemListContainer greeting= "Aprendiendo React con Coder"/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/Detalle" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
