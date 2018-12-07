import { connect } from "react-redux";
import { login } from "../redux/actions/auth";
import LoginComponent from "../components/Login/LoginComponent";

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => {
      dispatch(login(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
