import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as CartRepresentation } from "../../assets/shopping-bag.svg"
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={ toggleCartHidden }>
    <CartRepresentation className="cart-representation" />
    <span className="item-count">{ itemCount }</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// redux selector
//   slice of the state
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity, 0
  )
});
// the performance issue here is, so that whenever state changes,
// the code above always triggers regardless of the fact if number
// of the cart items changed or not

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
