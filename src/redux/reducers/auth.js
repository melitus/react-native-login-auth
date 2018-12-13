const defaultState = {
  isLoggingIn: false,
  isLoggedIn: false,
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
        isLoggingIn: true,
        email: action.email,
        password: action.password
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        token: action.token
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isLoggedIn: false,
        loginError: action.error
      };
    default:
      return state;
  }
}
