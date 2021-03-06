import { call, all, put, takeLatest } from "redux-saga/effects";
import { userActionTypes } from "../user/user.types";
import { cartActionReducer } from "./cart.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
