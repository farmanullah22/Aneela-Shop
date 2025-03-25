import React from 'react';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <div className="hero">
        <img src="/images/shopBack.jpg" className='Home-hero-image' alt="Hero-Image" />
      <p className="hero-head-text">
        Aneela's in Peshawar! <br />
        Homemade Frozen Food.
      </p>
    </div>
  );
}
