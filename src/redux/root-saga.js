import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}

//we can invoke/call the function here using call() or just doing fetchCollectionsStart()
