import React from "react";
import "./HomeHero.css";
import Myfooter from "./Myfooter";

const ImageGrid = () => {
  return (
    <>
    <p className="cooking-head-text">
    Cooking Workshop with International Clients
    </p>
    <div className="image-grid">
      {/* First Row */}
      <div className="row">
        <img src="/images/ItemImg/cook1.jpg" alt="First" className="image first" />
        <img src="/images/ItemImg/cook2.jpg" alt="Second" className="image second big" />
        <img src="/images/ItemImg/cook3.jpg" alt="Third" className="image third" />
      </div>

      {/* Second Row */}
      <div className="row">
        <img src="/images/ItemImg/cook4.jpg" alt="First" className="image first" />
        <img src="/images/ItemImg/cook5.jpg" alt="Second" className="image second small" />
        <img src="/images/ItemImg/cook6.jpg" alt="Third" className="image third" />
      </div>
    </div>
    
    <Myfooter />
    </>
  );
};

export default ImageGrid;
