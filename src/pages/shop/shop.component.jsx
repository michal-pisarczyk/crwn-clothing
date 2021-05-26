import React from "react";
import { ShopPageContainer } from "./shop.style";
import { Route } from "react-router-dom";
import CollectionsOverview from
"../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner
  from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionsStartAsync }
  from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact path={ `${match.path}` }
          render={ (props) => <CollectionsOverviewWithSpinner
                                isLoading={ isFetching }
                                { ...props } /> } />
        <Route
          path={ `${match.path}/:collectionId` }
          render={ (props) => <CollectionPageWithSpinner
                                isLoading={ isFetching }
                                { ...props } /> } />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: selectIsFetching(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync:
    () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
