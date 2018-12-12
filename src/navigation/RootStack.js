import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginContainer from "../containers/LoginContainer";
import WelcomeContainer from "../containers/WelcomeContainer";

const RootStack = createStackNavigator(
  {
    welcome: WelcomeContainer,
    login: LoginContainer
  },
  {
    initialRouteName: "login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#16a085",
        borderColor: "#16a085"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(RootStack);
