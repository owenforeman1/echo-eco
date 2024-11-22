import React from "react";
import "../styles/ProductsPage.css";
import ProductCard from "../components/ProductCard";
import productImage from "../assets/images/image1.jpg"; // Replace with actual images

const Womens = () => {
  const womensProducts = [
    { id: 1, name: "Women's Dress", price: 59.99, image: productImage },
    { id: 2, name: "Women's Blouse", price: 39.99, image: productImage },
    { id: 3, name: "Women's Skirt", price: 29.99, image: productImage },
    { id: 4, name: "Women's Heels", price: 79.99, image: productImage },
  ];

  return (
    <div className="products-page">
      <h2>Women's Apparel</h2>
      <div className="product-grid">
        {womensProducts.map((product) => (
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

export default Womens;
