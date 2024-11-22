import React from "react";
import "../styles/Home.css";
import image1 from "../assets/images/image1.jpg";
import heroImage from "../assets/images/hero-image4.jpg";
import ProductCard from "../components/ProductCard";

const Home = () => {
  // Sample list of products
  const products = [
    { id: 1, name: "Winter Jacket", price: 99.99, image: image1 },
    { id: 2, name: "Summer Dress", price: 49.99, image: image1 },
    { id: 3, name: "Hiking Boots", price: 129.99, image: image1 },
    { id: 4, name: "Running Shoes", price: 89.99, image: image1 },
    { id: 5, name: "Camping Tent", price: 199.99, image: image1 },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}

      <section className="product-list">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              itemObject={product}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h2>Cozy up and save big this winter!</h2>
          <p>Get next season's summer clothing at a killer price.</p>
        </div>
        <button className="cta-button">Start saving now</button>
      </section>
    </div>
  );
};

export default Home;
