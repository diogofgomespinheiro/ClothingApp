import ShopActionTypes from "./types";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
};

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});
