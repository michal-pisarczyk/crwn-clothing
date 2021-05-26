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
    collections => collections ?
                   collections[collectionUrlParam] :
                   null
  )
);

export const selectCollectionsForOverview = createSelector(
  [selectShopItemCollections],
  collections => collections ?
                 Object.keys(collections).map(key => collections[key]) :
                 []
);

export const selectIsFetching = createSelector(
  [selectShopItems],
  shop => shop.isFetching
);
