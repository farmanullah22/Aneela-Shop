import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeHero.css';

export default function CustomerReviews() {
  const navigate = useNavigate();

  return (
    <div className="customer-reviews">
      <h2 className="reviews-title">Our Customer Reviews</h2>
      <div className="reviews-container">
        {/* Left Side: Image */}
        <div className="review-image">
          <img src="/images/ItemImg/5.jpg" alt="Customer Review" />
        </div>

        {/* Right Side: Review Details */}
        <div className="review-content">
          <p className="rating">
            <strong>4.9/5</strong> ⭐⭐⭐⭐⭐
          </p>
          <p className="review-text">
            We have <strong>ALHAMDULILLAH</strong> almost a lot of happy customer stories with us and we want you to add on our services and product in your experience.
          </p>
          <button className="shop-button" onClick={() => navigate('/shop')}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
