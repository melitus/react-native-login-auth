import { connect } from "react-redux";

import { login } from "../redux/actions/auth";
import LoginComponent from "../components/Login/LoginComponent";

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: ({email, password}) => {
      console.log("from dispatch", {email, password})
      dispatch(login({email, password}));
    }
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;
