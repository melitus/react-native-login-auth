import React from "react";
import { Provider } from "react-redux";

import store from "./src/redux/stores/configureStore";
import RootStack from "./src/RootStack";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
