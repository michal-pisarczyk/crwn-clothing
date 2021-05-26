import React from "react";
import { ShopPageContainer } from "./shop.style";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from
"../../components/collections-overview/collections-overview.container";
import CollectionPageContainer
  from "../collection/collection.container";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync }
  from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact path={ `${match.path}` }
          component={ CollectionsOverviewContainer } />
        <Route
          path={ `${match.path}/:collectionId` }
          component={ CollectionPageContainer } />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync:
    () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
