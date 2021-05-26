import ShopActionTypes from "./shop.types";
import { firestore } from "../../firebase/firebase.utils";

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionReference = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

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
    };

    collectionReference
      .get()
      .then(snapshot => {
        const collectionsMap = convertSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        // this.setState({ loading: false });
      }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
