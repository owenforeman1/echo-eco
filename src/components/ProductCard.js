import React from "react";
import "../styles/ProductCard.css";
import { useLocalStorageCart } from "../hooks/UseLocalStorageCart";

const ProductCard = ({ image, name, price, itemObject }) => {
  const { cart, addItem, removeItem, updateItemQuantity, clearCart } =
    useLocalStorageCart();

  const addToCart = (itemObject) => {
    console.log(itemObject);
    addItem(itemObject);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <button onClick={() => addToCart(itemObject)} className="shop-button">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
