import React from "react";
import { ShopPageContainer } from "./shop.style";
import { Route } from "react-router-dom";
import CollectionsOverview from
"../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <ShopPageContainer>
    <Route
      exact path={ `${match.path}` }
      component={ CollectionsOverview } />
    <Route
      path={ `${match.path}/:collectionId` }
      component={ CollectionPage } />
  </ShopPageContainer>
);

export default ShopPage;
