import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSigninStarted = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});
export const googleSigninSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user,
});
export const googleSigninFailed = (error) => ({
  type: userActionTypes.GOOGLE_SIGNIN_FAIL,
  payload: error,
});
export const emailSigninStarted = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});
export const emailSigninSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user,
});
export const emailSigninFailed = (error) => ({
  type: userActionTypes.GOOGLE_SIGNIN_FAIL,
  payload: error,
});
