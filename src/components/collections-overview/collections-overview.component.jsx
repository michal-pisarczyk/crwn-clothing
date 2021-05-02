import React from "react";
import "./collections-overview.style.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopItemCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={ id } { ...otherCollectionProps } />
      ))
    }
  </div>
);

const mapStateToProps = state => ({
  collections: selectShopItemCollections(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
