import { AsyncStorage } from 'react-native';

import { actionTypes } from "./actionTypes";
import LoginService from "../services/LoginService";

export function requestLogin({ email, password }) {
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
  export const login = ({ email, password }) => {
    console.log("from after login action ", { email, password });

  return dispatch => {
   dispatch(requestLogin({ email, password }))
      LoginService({ email, password })
      .then(response => {
         console.log('response' + response.to)
        console.log("from after res action ",response.json());
      })
      .then(json  => {

        console.log("from auth action ",  json );

        if (!json) {
          console.log("from auth action ", json);
          dispatch(loginError("Invalid email or password"));
        } else {
          dispatch(receiveLogin(json));
          AsyncStorage.setItem('token', json); 

        }
      })
      .catch(err => console.log("Error: ", err));
  };
};
