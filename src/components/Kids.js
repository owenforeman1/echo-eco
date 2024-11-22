import React from "react";
import "../styles/ProductsPage.css";
import ProductCard from "../components/ProductCard";
import productImage from "../assets/images/image1.jpg"; // Replace with actual images

const Kids = () => {
  const kidsProducts = [
    { id: 1, name: "Kids' Hoodie", price: 29.99, image: productImage },
    { id: 2, name: "Kids' Shorts", price: 19.99, image: productImage },
    { id: 3, name: "Kids' Sneakers", price: 49.99, image: productImage },
    { id: 4, name: "Kids' Cap", price: 9.99, image: productImage },
  ];

  return (
    <div className="products-page">
      <h2>Kids' Apparel</h2>
      <div className="product-grid">
        {kidsProducts.map((product) => (
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

export default Kids;
