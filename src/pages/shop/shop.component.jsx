import React from "react";
import { ShopPageContainer } from "./shop.style";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from
"../../components/collections-overview/collections-overview.container";
import CollectionPageContainer
  from "../collection/collection.container";
import { connect } from "react-redux";
import { fetchCollectionsStart }
  from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
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
  fetchCollectionsStart:
    () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
