import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopItems = state => state.shop;

export const selectShopItemCollections = createSelector(
  [selectShopItems],
  shop => shop.collections
);

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopItemCollections],
    collections => collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
