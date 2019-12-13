import { all, call } from "redux-saga/effects";

import { shopSagas } from "./modules/shop/sagas";
import { userSagas } from "./modules/user/sagas";
import { cartSagas } from "./modules/cart/sagas";

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
  ]);
}