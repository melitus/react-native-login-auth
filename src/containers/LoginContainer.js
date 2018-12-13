import { connect } from "react-redux";
import { login, resetLogin } from "../redux/actions/actionCreators";
import LoginComponent from "../components/LoginComponent";

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => {
      dispatch(login(email, password));
    },
    resetLogin: () => dispatch(resetLogin())
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;
