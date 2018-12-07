import { actionTypes } from "./actionTypes";
import LoginService from "../services/LoginService";

export function requestLogin(user) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    user
  };
}

export function receiveLogin(user) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token
  };
}

export function loginError(error) {
  return {
    type: actionTypes.LOGIN_FAIL,
    error
  };
}

 // thunkify login action
  export const login = (email, password) => {
  return dispatch => {
    LoginService(email, password)
      .then(res => res.json())
      .then(user => ({ user, response }))
      .then(({ user, response }) => {
        if (!response.ok) {
          dispatch(loginError(error.toString()));
          throw "Invalid response";
        } else {
          dispatch(receiveLogin(user));
        }
      })
      .catch(err => console.log("Error: ", err));
  };
};
