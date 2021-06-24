import React from "react";
import { OverviewContainer } from "./collections-overview.style";
import CollectionPreview
  from "../collection-preview/collection-preview.component";
import { selectCollectionsForOverview }
  from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const CollectionsOverview = ({ collections }) => (
  <OverviewContainer>
    {
      collections.map(({ id, ...otherCollectionProps }) =>
        <CollectionPreview key={ id } { ...otherCollectionProps } />
      )
    }
  </OverviewContainer>
);

const mapStateToProps = state => ({
  collections: selectCollectionsForOverview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
