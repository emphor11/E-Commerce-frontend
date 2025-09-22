import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [orderPlaced, setOrderPlaced] = useState(false); // 👈 new state

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // 👇 simulate checkout (animation trigger)
  const checkout = () => {
    setOrderPlaced(true);

    // Reset cart after checkout
    setCartItems(getDefaultCart());

    // Hide animation after 2.5s
    setTimeout(() => {
      setOrderPlaced(false);
    }, 2500);
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    checkout,       // 👈 export checkout
    orderPlaced,    // 👈 export animation state
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
