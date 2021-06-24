import React from "react";
import { CollectionItemContainer,
         CollectionItemImage,
         CollectionItemFooter,
         CollectionItemName,
         CollectionItemPrice,
         CollectionItemButton } from "./collection-item.style";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => (
  <CollectionItemContainer>
    <CollectionItemImage url={ item.imageUrl } />
    <CollectionItemFooter>
      <CollectionItemName>{ item.name }</CollectionItemName>
      <CollectionItemPrice>£{ item.price }</CollectionItemPrice>
    </CollectionItemFooter>
    <CollectionItemButton
      type="button"
      isInverted
      onClick={ () => addItem(item) }>
        Add to cart
    </CollectionItemButton>
  </CollectionItemContainer>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
