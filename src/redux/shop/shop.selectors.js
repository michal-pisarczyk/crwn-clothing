import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopItems = state => state.shop;

export const selectShopItemCollections = createSelector(
  [selectShopItems],
  shop => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopItemCollections],
    collections => collections[collectionUrlParam]
  )
);
