import React from "react";
import HomeHero from "../components/HomeHero";
import Product from "../components/Product";
import CartSidebar from "../components/CookingWorkshop";


const Home = () => {
  return (
    <div >
     <HomeHero />

     <div className="Aneelas-Trust">
      <p className="Aneelas-trust-text">
      <span className="Aneelas-trust-bold">Aneelas </span>  most <span className="Aneelas-trust-bold">TRUSTABLE</span> Homemade <br /> Frozen Food.
      </p>
      <p className="Aneela-para">
      Aneela’s is Peshawar’s 🇵🇰 most trusted homemade frozen food brand, bringing you the perfect blend of taste, freshness, and quality. With 100,000+ satisfied customers, we ensure every bite is as delightful as homemade.
      </p>
      <button className="Aneela-button">Shop Now !</button>
     </div>

     <Product />
    <CartSidebar />

     
    </div>
  );
};

export default Home;
