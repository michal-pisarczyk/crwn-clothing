import React from "react";
import { CollectionPageContainer, Title, Items }
  from "./collection.style";
import CollectionItem
  from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <Title>{ title }</Title>
      <Items>
        {
          items.map(
            item => <CollectionItem key={ item.id } item={ item } />
          )
        }
      </Items>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
