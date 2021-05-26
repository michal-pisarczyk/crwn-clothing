import React from "react";
import { ShopPageContainer } from "./shop.style";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from
"../../components/collections-overview/collections-overview.container";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import WithSpinner
  from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionsStartAsync }
  from "../../redux/shop/shop.actions";
import { selectIsLoaded }
  from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isLoaded } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact path={ `${match.path}` }
          component={ CollectionsOverviewContainer } />
        <Route
          path={ `${match.path}/:collectionId` }
          render={ (props) => <CollectionPageWithSpinner
                                isLoading={ !isLoaded }
                                { ...props } /> } />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync:
    () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
