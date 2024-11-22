import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Echo Eco</h1>
        <p className="tagline">
          Empowering individuals to tread lightly and make eco-conscious
          choices.
        </p>
      </div>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Echo Eco, we believe in making a positive impact on the planet
          while offering high-quality, sustainable products. Our mission is to
          empower individuals to tread lightly and make eco-conscious choices.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>
            <strong>Sustainability:</strong> We prioritize eco-friendly
            practices in every step of our process.
          </li>
          <li>
            <strong>Quality:</strong> Durable and thoughtfully designed products
            built to last.
          </li>
          <li>
            <strong>Community:</strong> Building a global network of
            eco-conscious individuals.
          </li>
        </ul>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Echo Eco was founded with the belief that our footprints should echo
          harmony with nature. What started as a small initiative to create
          sustainable outdoor gear has grown into a movement towards a greener
          future.
        </p>
      </section>

      <section className="about-cta">
        <p>
          Join us in making a difference. Shop sustainably and inspire change.
        </p>
        <Link to="/" className="cta-button">
          Explore Our Products
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
