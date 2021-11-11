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
