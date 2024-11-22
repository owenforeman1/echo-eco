import React from "react";
import "../styles/Cart.css";

const Cart = () => {
  // Example cart items
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 100.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      price: 120.0,
      quantity: 1,
    },
  ];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button>-</button> {item.quantity} <button>+</button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
