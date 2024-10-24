// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Home, Simplified</h1>
        <p>Find the best rates and loans, faster than ever.</p>
        <button className="cta">Get Started</button>
        <button className="cta secondary">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
