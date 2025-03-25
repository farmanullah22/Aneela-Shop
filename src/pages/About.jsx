import React from "react";
import "./About.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Myfooter from "../components/Myfooter";

function About() {
  return (
    <div>

    <div className="about-container">
      {/* Heading */}
      <h2 className="about-heading">From Passion to Entrepreneurship</h2>

      {/* Description */}
      <p className="about-description">
        Aneela Khan, founder of Aneela’s, turned her passion for cooking into a thriving business 
        offering fresh homemade desi and frozen food across Peshawar. With a postgraduate degree in 
        Social Work, she transitioned from NGO work to entrepreneurship. Aneela’s Kitchen also hosts 
        cooking workshops for foreigners, promoting cultural exchange.
      </p>

      {/* Social Media Section */}
      <h3 className="about-subheading">Let's Connect</h3>
      <div className="social-icons">
        <a href="#" className="social-icon facebook"><FaFacebookF /></a>
        <a href="#" className="social-icon twitter"><FaTwitter /></a>
        <a href="#" className="social-icon youtube"><FaYoutube /></a>
      </div>

      {/* Call Us Section */}
      <h3 className="about-subheading">Call Us</h3>
    </div>

    <Myfooter />
    </div>
  );
}

export default About;
