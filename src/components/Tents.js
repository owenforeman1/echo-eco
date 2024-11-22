import React from "react";
import "../styles/ProductsPage.css";
import ProductCard from "../components/ProductCard";
import productImage from "../assets/images/image1.jpg"; // Replace with actual images

const Tents = () => {
  const tentsProducts = [
    { id: 1, name: "2-Person Tent", price: 199.99, image: productImage },
    { id: 2, name: "4-Person Tent", price: 299.99, image: productImage },
    { id: 3, name: "Camping Mat", price: 49.99, image: productImage },
    { id: 4, name: "Tent Poles", price: 19.99, image: productImage },
  ];

  return (
    <div className="products-page">
      <h2>Tents & Outdoor Gear</h2>
      <div className="product-grid">
        {tentsProducts.map((product) => (
          <ProductCard
            key={product.id}
            itemObject={product}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Tents;
