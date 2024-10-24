// src/components/Services.js
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2>Why Choose Us?</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Fast & Simple</h3>
          <p>
            We make the process of getting a loan faster and simpler than ever.
          </p>
        </div>
        <div className="service-card">
          <h3>Best Rates</h3>
          <p>
            Get the most competitive mortgage rates available in the market.
          </p>
        </div>
        <div className="service-card">
          <h3>No Hidden Fees</h3>
          <p>Transparency is key. No hidden fees, no surprises.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
