import React, { useState, useEffect } from 'react';
import "./Myfooter.css"; // Ensure you use a separate CSS file for the footer

const Myfooter = () => {
  const [showScroll, setShowScroll] = useState(false);


  return (
    <footer className="footer">
      <div className="footer-container footer-content">
        <div className=" footer-about">
          <h3 className='footerabout'>About Us</h3>
          <p className='footer-para'>
            Aneela Khan, founder of Aneela’s, turned her passion for cooking into a thriving business
            offering fresh homemade desi and frozen food across Peshawar.
          </p>
        </div>
        
        <div className="footer-section footer-content Menus">
          <ul>
          <h3 className="footerli">Menu</h3>
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        <div className="footer-Quick">
          <h3 className='footerli'>Quick Links</h3>
          <ul>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Order Return and Refund Policy</a></li>
            <li><a href="/">Ordering and Shipping Policy</a></li>
            <li><a href="/">Food Authority License</a></li>
          </ul>
        </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
      )}
    </footer>
  );
};

export default Myfooter;
