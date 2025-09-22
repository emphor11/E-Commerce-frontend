import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    all_product = [],
    cartItems = {},
    removeFromCart,
    checkout,
    orderPlaced,
  } = useContext(ShopContext);

  // ✅ Calculate if cart has any items
  const cartNotEmpty = Object.values(cartItems).some((qty) => qty > 0);

  return (
    <div className="CartItems">
      <div className="cartItems-Format-Main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems && cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems_format">
                <img
                  src={e.image}
                  alt=""
                  className="cartIcon-ProductIcon"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="remove"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* ✅ Buy Now button only when cart not empty & order not placed */}
      {cartNotEmpty && !orderPlaced && (
        <div className="checkout-section">
          <button className="checkout-btn" onClick={checkout}>
            Buy Now
          </button>
        </div>
      )}

      {/* ✅ Popup Modal for Order Placed */}
      {orderPlaced && (
        <div className="order-modal">
          <div className="order-modal-content">
            <h2>🎉 Order Placed!</h2>
            <p>Your order has been placed successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
