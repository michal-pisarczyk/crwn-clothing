import React from "react";
import { ItemContainer,
         ImageContainer,
         ItemImage,
         ItemName,
         QuantityContainer,
         Arrow,
         ItemQuantity,
         ItemPrice,
         RemoveButton } from "./checkout-item.style";
import { addItem,
         removeItem,
         clearItemFromCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, add, remove, clear }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <ItemContainer>
      <ImageContainer>
        <ItemImage src={ imageUrl } alt="item" />
      </ImageContainer>
      <ItemName>{ name }</ItemName>
      <QuantityContainer>
        <Arrow onClick={ () => remove(cartItem) }>&#10094;</Arrow>
        <ItemQuantity>{ quantity }</ItemQuantity>
        <Arrow onClick={ () => add(cartItem) }>&#10095;</Arrow>
      </QuantityContainer>
      <ItemPrice>£{ price }</ItemPrice>
      <RemoveButton
        onClick={ () => clear(cartItem) }>&#10005;</RemoveButton>
    </ItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item)),
  clear: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
