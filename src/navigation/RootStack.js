import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "../containers/LoginContainer";
import WelcomeScreen from "../components/Welcome/WelcomeScreen";

const RootStack = createStackNavigator(
  {
    welcome: WelcomeScreen,
    login: LoginScreen
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
