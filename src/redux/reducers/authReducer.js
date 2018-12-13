import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  RESET_LOGIN_STATE
} from "../actions/actionTypes";

const defaultState = {
  isLoggingIn: false,
  isLoggedIn: false,
  email: "",
  token: "",
  loginError: ""
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        email: action.email
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        loginError: "",
        token: action.token
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        loginError: action.error
      };
    case RESET_LOGIN_STATE:
      return defaultState;
    default:
      return state;
  }
}
