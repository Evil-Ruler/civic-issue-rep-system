
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import "./index.css";
import {CartProvider} from "react-use-cart"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbarr from "./Navbarr";
import Footer from "./Footer";
import CitizenDashboard from "./pages/CitizenDashboard";




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
          <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
      </Routes>
      <Footer/>
      </CartProvider>
</>
  );
}