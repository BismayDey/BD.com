import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Product.css";

const Product = () => {
  const navigate = useNavigate(); // Create a navigate function

  // Handler for Learn More button
  const handleLearnMore = (service) => {
    navigate(`/services/${service}`); // Navigate to the respective service page
  };

  return (
    <div className="product-container">
      <h2>Our Services</h2>
      <div className="product-list">
        <div className="product-item">
          <h3>Home Loans</h3>
          <p>Get competitive rates on home loans with flexible terms.</p>
          <button onClick={() => handleLearnMore("home-loans")}>
            Learn More
          </button>
        </div>
        <div className="product-item">
          <h3>Mortgage Refinancing</h3>
          <p>Refinance your mortgage for lower rates or better terms.</p>
          <button onClick={() => handleLearnMore("mortgage-refinancing")}>
            Learn More
          </button>
        </div>
        <div className="product-item">
          <h3>Title Insurance</h3>
          <p>
            Protect your property with comprehensive title insurance coverage.
          </p>
          <button onClick={() => handleLearnMore("title-insurance")}>
            Learn More
          </button>
        </div>
        <div className="product-item">
          <h3>Real Estate Services</h3>
          <p>Expert guidance and support for all your real estate needs.</p>
          <button onClick={() => handleLearnMore("real-estate-services")}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
