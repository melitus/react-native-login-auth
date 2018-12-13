import WelcomeComponent from "../components/WelcomeComponent";
import { connect } from "react-redux";
import { changeLocale } from "../redux/actions/actionCreators";

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: id => {
      dispatch(changeLocale(id));
    }
  };
};

const mapStateToProps = state => {
  return { store: state };
};

const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeComponent);

export default WelcomeContainer;
