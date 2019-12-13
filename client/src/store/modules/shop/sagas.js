import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../../services/firebase/firebase";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./actions";

import ShopActionTypes from "./types";

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collecttionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collecttionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
  ])
}
