import { AsyncStorage } from 'react-native';

import { actionTypes } from "./actionTypes";
import LoginService from "../services/LoginService";

export function requestLogin(email, password) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    email,
    password
  };
}

export function receiveLogin(token) {
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
  export const login = ({email, password}) => {
    console.log("from after login action ", {email, password});

  return dispatch => {
   // dispatch(requestLogin(email))
      LoginService({email, password})
      .then(res => {
        console.log("from after res action ",res);

        res.json()
      })
      .then(res  => {
        console.log("from auth action ", res);

        if (!res.ok) {
          console.log("from auth action ", res);
          dispatch(loginError("Invalid email or password"));
        } else {
          dispatch(receiveLogin(res.token));
          AsyncStorage.setItem('token', res.token); 

        }
      })
      .catch(err => console.log("Error: ", err));
  };
};
