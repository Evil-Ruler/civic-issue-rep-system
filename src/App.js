
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import "./index.css";
import About from './About';
import Contact from './Contact'
import {CartProvider} from "react-use-cart"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import data from "./Components/data.json";
import Product from "./Product"
import Navbarr from "./Navbarr";
import Footer from "./Footer";
import Cart from "./Cart";


export default function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true       
  });
}, []);
  return (
    <>
    <CartProvider>
      <Navbarr/>
      <Routes>
          <Route path='/' element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
           <Route path="/Product/:id" element={<Product />} />
           <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
      </CartProvider>
</>
  );
}