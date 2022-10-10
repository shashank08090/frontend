import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN,
} from "../Constants/userConstants";
export const userlogin = (credentials) =>
  //   alert(credentials)
  ({
    type: USER_LOGIN,
    payload: credentials,
  });
