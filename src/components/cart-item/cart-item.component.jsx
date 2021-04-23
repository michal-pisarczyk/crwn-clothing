import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => (
  <div className="cart-item">
    <img src={ imageUrl } alt="item" />
    <div className="item-details">
      <span className="item-name">{ name }</span>
      <span>{ quantity } x £{ price }</span>
    </div>
  </div>
)

export default CartItem;
