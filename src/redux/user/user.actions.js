import { userActionTypes } from "./user.types";

export const googleSigninStarted = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});
export const signinSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});
export const signinFailed = (error) => ({
  type: userActionTypes.SIGNIN_FAIL,
  payload: error,
});
export const emailSigninStarted = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});
export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFail = (error) => ({
  type: userActionTypes.SIGN_OUT_FAIL,
  payload: error,
});
export const SignUpStarted = (emailAndPasswordAndDisplayName) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: emailAndPasswordAndDisplayName,
});
export const signUpSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});
export const signUpFailed = (error) => ({
  type: userActionTypes.SIGN_UP_FAIL,
  payload: error,
});
