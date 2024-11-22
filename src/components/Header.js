import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    // Define the available pages
    const availablePages = {
      mens: "/mens",
      womens: "/womens",
      kids: "/kids",
      tents: "/tents",
      contact: "/contact",
      cart: "/cart",
      account: "/account",
    };

    // Check if the query matches an available page
    if (availablePages[normalizedQuery]) {
      navigate(availablePages[normalizedQuery]);
    } else {
      navigate("/404"); // Redirect to a 404 page for unmatched queries
    }
  };

  return (
    <div className="header-container">
      {/* Main Header */}
      <header className="header">
        <div className="logo">
          <Link to="/">Echo Eco</Link>
          <p>Our footprints are like echoes; tread lightly.</p>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mens">Men's</Link>
            </li>
            <li>
              <Link to="/womens">Women's</Link>
            </li>
            <li>
              <Link to="/kids">Kids'</Link>
            </li>
            <li>
              <Link to="/tents">Tents</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="account-cart">
          <Link to="/account" className="account-link">
            My Account
          </Link>
          <Link to="/cart" className="cart-link">
            Cart
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(); // Trigger search on Enter key
          }}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
