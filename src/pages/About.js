import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        At Better, we strive to make home ownership and real estate services
        easier and more accessible for everyone. Our mission is to revolutionize
        the mortgage industry through innovative technology and exceptional
        service.
      </p>

      <h2>Our Mission</h2>
      <p>
        We believe that everyone deserves a home they love, and we work
        tirelessly to help our customers achieve that dream. With our
        personalized services and transparent processes, we aim to make home
        financing a seamless experience.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img
            src="https://images.ottplay.com/images/shah-rukh-khan-hospitalized-1716384390.jpg?impolicy=ottplay-20210210&width=1200&height=675"
            alt="Team Member 1"
          />
          <h3>Jane Doe</h3>
          <p>CEO & Founder</p>
          <p>
            Jane has over 15 years of experience in the mortgage industry,
            leading our team with passion and dedication.
          </p>
        </div>
        <div className="team-member">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
            alt="Team Member 2"
          />
          <h3>John Smith</h3>
          <p>Head of Operations</p>
          <p>
            With a background in finance, John ensures that our operations run
            smoothly and efficiently.
          </p>
        </div>
        <div className="team-member">
          <img
            src="https://img.freepik.com/free-photo/young-crazy-man-happy-expression_1194-5236.jpg"
            alt="Team Member 3"
          />
          <h3>Emily Johnson</h3>
          <p>Customer Success Manager</p>
          <p>
            Emily is dedicated to providing outstanding service to our customers
            and helping them every step of the way.
          </p>
        </div>
      </div>

      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <p>
            "Better made the home buying process so easy and stress-free! Highly
            recommend their services."
          </p>
          <h4>- Sarah Lee</h4>
        </div>
        <div className="testimonial">
          <p>
            "The team at Better was incredibly helpful and guided me through
            every step of my mortgage refinancing."
          </p>
          <h4>- Michael Brown</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
