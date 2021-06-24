import React from "react";
import { CartImageContainer,
         CartImage,
         ItemCountInfo } from "./cart-icon.style";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount }
  from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartImageContainer onClick={ toggleCartHidden }>
    <CartImage />
    <ItemCountInfo>{ itemCount }</ItemCountInfo>
  </CartImageContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
