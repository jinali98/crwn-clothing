import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}

//we can invoke/call the function here using call() or just doing fetchCollectionsStart()
