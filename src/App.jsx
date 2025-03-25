import React from "react";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartPopup from "./CartPopup"; // Import the component

const App = () => {
  return (
    <>
      <Navbar /> {/* Navbar should be here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      const [cartOpen, setCartOpen] = useState(false);
    <div>
      {/* Cart Button */}
      <button className="cart-button" onClick={() => setCartOpen(true)}>
        🛒 Open Cart
      </button>

      {/* Cart Popup */}
      <CartPopup isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>

    </>
  );
};

export default App;




