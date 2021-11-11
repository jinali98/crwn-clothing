import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";
import { signinFailed, signinSuccess } from "./user.actions";
import { userActionTypes } from "./user.types";

export function* getSnapShotfromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userRefSnapShot = yield userRef.get();
    yield put(
      signinSuccess({ id: userRefSnapShot.id, ...userRefSnapShot.data() })
    );
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* googleSignin() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotfromUserAuth(user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}
export function* emailSignin({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotfromUserAuth(user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignin);
}

export function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignin);
}

export function* userSagas() {
  yield all([call(onGoogleSigninStart), call(onEmailSigninStart)]);
}
