import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as CartRepresentation } from "../../assets/shopping-bag.svg"

const CartIcon = () => (
  <div className="cart-icon">
    <CartRepresentation className="cart-representation" />
    <span className="item-count">0</span>
  </div>
)

export default CartIcon;
