import React, { createContext, useContext, useState } from 'react';

// Create Cart Context
const CartContext = createContext();

// CartProvider to provide cart state and actions
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // Cart state to hold the cart items

  // Add product to the cart and increase quantity if it already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));  // Removes product by id
  };

  // Increase quantity of a product in the cart
  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex((product) => product.id === productId);
      if (productIndex >= 0) {
        updatedCart[productIndex].quantity += 1;
      }
      return updatedCart;
    });
  };

  // Decrease quantity of a product in the cart (only if quantity > 1)
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex((product) => product.id === productId);
      if (productIndex >= 0 && updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
      }
      return updatedCart;
    });
  };

  // Cart count for display in Navbar
  const cartCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context
export const useCart = () => {
  return useContext(CartContext);
};
