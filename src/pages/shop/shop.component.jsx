import React from "react";
import { ShopPageContainer } from "./shop.style";
import { Route } from "react-router-dom";
import CollectionsOverview from
"../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact path={ `${match.path}` }
          component={ CollectionsOverview } />
        <Route
          path={ `${match.path}/:collectionId` }
          component={ CollectionPage } />
      </ShopPageContainer>
    );
  }
}

export default ShopPage;
