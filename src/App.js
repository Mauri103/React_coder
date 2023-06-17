import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import Header from "./components/Header/Header";
import Navbar from './components/NavBar/NavBar';
import HomePage from "./pages/HomePage/HomePage";
import PantalonesPage from "./pages/PantalonesPage/PantalonesPage";
import ItemDetailContainerPage from "./pages/ItemDetailContainerPage/ItemDetailContainerPage";



const App  = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/2" element={<PantalonesPage />} />
          <Route path="/detail/:id" element={<ItemDetailContainerPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
