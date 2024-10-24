import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
import Rates from "./pages/Rates";
import Contact from "./pages/Contact";
import Login from "./pages/Login"; // Import Login

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> {/* Add login route */}
      </Routes>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
