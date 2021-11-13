import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from "../../firebase/firebase.utils";
import {
  signinFailed,
  signinSuccess,
  signOutFail,
  signOutSuccess,
  signUpFailed,
} from "./user.actions";
import { userActionTypes } from "./user.types";

export function* getSnapShotfromUserAuth(user, otherInfo) {
  try {
    const userRef = yield call(createUserProfileDocument, user, { otherInfo });
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
export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getSnapShotfromUserAuth(user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signout() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapShotfromUserAuth(user, { displayName });
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignin);
}

export function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignin);
}

export function* onUserAuthenticated() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signout);
}

export function* onUserSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onUserAuthenticated),
    call(onUserSignOutStart),
    call(onUserSignUpStart),
  ]);
}
