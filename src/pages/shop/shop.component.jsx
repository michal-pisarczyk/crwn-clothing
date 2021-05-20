import React from "react";
import { ShopPageContainer } from "./shop.style";
import { Route } from "react-router-dom";
import CollectionsOverview from
"../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionReference = firestore.collection("collections");

    const convertSnapshotToMap = collections => {
      const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
          id: doc.id,
          routeName: encodeURI(title.toLowerCase()),
          title,
          items
        };
      });

      return transformedCollection.reduce(
        (accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
        }, {}
      );
    }

    this.unsubscribeFromSnapshot = collectionReference.onSnapshot(async snapshot => {
      const collectionsMap = convertSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

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

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
