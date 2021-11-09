import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";
import { googleSigninFailed, googleSigninSuccess } from "./user.actions";
import { userActionTypes } from "./user.types";

export function* googleSignin() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    // const { user } = userRef;
    const userRef = yield call(createUserProfileDocument, user);
    const userRefSnapShot = yield userRef.get();
    yield put(
      googleSigninSuccess({ id: userRefSnapShot.id, ...userRefSnapShot.data() })
    );
  } catch (error) {
    yield put(googleSigninFailed(error));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignin);
}

export function* userSagas() {
  yield all([call(onGoogleSigninStart)]);
}
