import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import { firestore } from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

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

export function* fetchCollectionsAsync() {
  try {
    const collectionReference = firestore.collection("collections");
    const snapshot = yield collectionReference.get();
    const collectionsMap = yield call(convertSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}
