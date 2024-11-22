import React from "react";
import "../styles/ProductsPage.css";
import ProductCard from "../components/ProductCard";
import productImage from "../assets/images/image1.jpg";

const Mens = () => {
  const mensProducts = [
    { id: 1, name: "Men's Jacket", price: 99.99, image: productImage },
    { id: 2, name: "Men's Jeans", price: 49.99, image: productImage },
    { id: 3, name: "Men's T-Shirt", price: 19.99, image: productImage },
    { id: 4, name: "Men's Boots", price: 129.99, image: productImage },
  ];

  return (
    <div className="products-page">
      <h2>Men's Apparel</h2>
      <div className="product-grid">
        {mensProducts.map((product) => (
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

export default Mens;
