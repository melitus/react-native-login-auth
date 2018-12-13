import {
  CHANGE_LOCALE,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  RESET_LOGIN_STATE
} from "./actionTypes";
import { AsyncStorage } from "react-native";
import LoginService from "../services/LoginService";

export function changeLocale(locale) {
  return {
    type: CHANGE_LOCALE,
    locale
  };
}

export function requestLogin(email, password) {
  return {
    type: LOGIN_REQUEST,
    email,
    password
  };
}

export function receiveLogin(email, token) {
  return {
    type: LOGIN_SUCCESS,
    email,
    token
  };
}

export function loginError(error) {
  return {
    type: LOGIN_FAIL,
    error
  };
}

export function resetLogin() {
  return {
    type: RESET_LOGIN_STATE
  };
}

// thunkify login action
export const login = (email, password) => {
  return dispatch => {
    dispatch(requestLogin(email, password));
    LoginService(email, password)
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          dispatch(loginError(res.body));
        } else {
          dispatch(receiveLogin(res.body.email, res.body.token));
          AsyncStorage.setItem("token", res.body.token);
        }
      })
      .catch(err => dispatch(loginError(err.message)));
  };
};
