import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, ...otherProps }) => {
  console.log(otherProps);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(
            cartItem => <CartItem key={ cartItem.id }
                                  item={ cartItem } />
          ) :
          <span className="empty-cart-message">
            Your cart is empty.
          </span>
        }
      </div>
      <CustomButton
        onClick={ () => history.push("/checkout") }>
        Go to checkout
      </CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
