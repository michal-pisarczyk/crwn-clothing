import React from "react";
import { CartItemContainer,
         CartItemImage,
         CartItemDetails,
         CartItemName,
         CartItemPrice } from "./cart-item.style";

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => (
  <CartItemContainer>
    <CartItemImage src={ imageUrl } alt="item" />
    <CartItemDetails>
      <CartItemName>{ name }</CartItemName>
      <CartItemPrice>{ quantity } x £{ price }</CartItemPrice>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
