import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Shop</h4>
          <Link to="/mens">Men's Apparel</Link>
          <Link to="/womens">Women's Apparel</Link>
          <Link to="/kids">Kids' Apparel</Link>
          <Link to="/tents">Tents</Link>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <a href="/shipping">Shipping</a>
          <a href="/returns">Returns</a>
          <a href="/guarantee">Money Back Guarantee</a>
          <a href="/discounts">Professional Discounts</a>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <a
            href="https://www.earthday.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Earth Day
          </a>
          <a
            href="https://www.worldwildlife.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            WWF
          </a>
          <a
            href="https://theoceancleanup.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ocean Cleanup Project
          </a>
          <a href="/">Sustainable Solar</a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/mission">Our Mission</Link>
          <Link to="/eco-tracker">Eco Tracker</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
