import React from "react";
import { ShopPageContainer } from "./shop.style";
import { Route } from "react-router-dom";
import CollectionsOverview from
"../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore } from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
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

    collectionReference.onSnapshot(async snapshot => {
      console.log(convertSnapshotToMap(snapshot));
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

export default ShopPage;
