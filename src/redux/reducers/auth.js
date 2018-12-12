const defaultState = {
  loggingIn: false,
  loggedIn: false,
  email: "",
  password: "",
  token: "",
  loginError: ""
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loggingIn: true,
        email: action.email,
        password: action.password
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedIn: true,
        token: action.token
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        loggedIn: false,
        loginError: action.error
      };
    default:
      return state;
  }
}
