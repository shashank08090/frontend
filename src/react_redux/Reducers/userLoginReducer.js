import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_SUCCESS,
} from "../Constants/userConstants";
export const initialState = {};
export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS: {
      console.log(action);
      return { loading: false, userInfo: action.payload };
    }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT_SUCCESS:
      return { loading: false, userInfo: null };
    default:
      return state;
  }
};
