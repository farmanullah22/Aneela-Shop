import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top">
        <p className="top-text">Home Delivery Available in Peshawar</p>
        <p className="top-contact">Call us: +92 317-1670742</p>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          {/* Menu Icon for Mobile */}
          <div className="menu-icon" onClick={toggleSidebar}>
            <FaBars />
          </div>

          {/* Logo */}
          <a href="/" className="logo">
            <img src="/public/images/Aneelas.png" alt="Logo" className="logo-img" />
          </a>

          {/* Navbar Links for Larger Screens */}
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/shop">SHOP</a></li>
            <li><a href="/about">ABOUT US</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>

          {/* Cart Icon */}
          <div className="cart-icon">
            <a href="/cart">
              <FaShoppingCart />
              <span className="cart-badge">0</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </div>
        <ul className="sidebar-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/shop">SHOP</a></li>
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/contact">CONTACT US</a></li>
        </ul>
      </div>

      {/* Overlay when Sidebar is Open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
