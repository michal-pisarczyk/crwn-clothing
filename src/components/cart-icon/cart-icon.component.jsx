import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as CartRepresentation } from "../../assets/shopping-bag.svg"
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={ toggleCartHidden }>
    <CartRepresentation className="cart-representation" />
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
