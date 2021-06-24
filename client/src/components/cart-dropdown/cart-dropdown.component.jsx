import React from "react";
import { CartDropdownContainer,
         CartItemsContainer,
         GoToCheckoutButton,
         EmptyCartMessage } from "./cart-dropdown.style";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map(
          cartItem => <CartItem
                        key={ cartItem.id }
                        item={ cartItem } />
        ) :
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      }
    </CartItemsContainer>
    <GoToCheckoutButton
      onClick={ () => { history.push("/checkout")
                        dispatch(toggleCartHidden()) } }>
      Go to checkout
    </GoToCheckoutButton>
  </CartDropdownContainer>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
