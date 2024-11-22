import { useState, useEffect } from "react";

// Custom Hook for managing shopping cart in localStorage
export const useLocalStorageCart = (key = "shoppingCart") => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage or default to an empty array
    const savedCart = localStorage.getItem(key);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cart));
  }, [cart, key]);

  // Add item to the cart
  const addItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      // Add new item to the cart
      return [...prevCart, item];
    });
  };

  // Remove item from the cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update the quantity of an item in the cart
  const updateItemQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return { cart, addItem, removeItem, updateItemQuantity, clearCart };
};
