import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import Header from "./components/Header/Header";
import Navbar from './components/NavBar/NavBar';
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Footer from "./components/Footer/Footer";
import { ProductProvider } from "./context/ProductContext";
import CartPage from "./pages/CartPage/CartPage";
import FinishStepper from "./components/FinishModal/FinishModal";


const App  = () => {
  return (
    <Router>
      <ProductProvider>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/finish" element={<FinishStepper />} />
          </Routes>
          <Footer />
        </div>
      </ProductProvider>
    </Router>
  );
}


export default App;
