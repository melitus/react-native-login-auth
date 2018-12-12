import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { renderField } from "../Field";
import loginValidate from "./LoginValidate";

class LoginFormComponent extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = ({ email, password } ) => {
    this.props.onLogin( { email, password } , () => {
      console.log("form values", { email, password });
      this.props.navigation.navigate("welcome");
    });
  };

  renderError = () => {
    if(this.props.errorMessage){
      return (
        <Text> oops {this.props.errorMessage}</Text>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Login Portal</Text>
        <Field
          name="email"
          placeholder="Email Address"
          autoCapitalize="none"
          isEmail
          component={renderField}
        />
        <Field
          name="password"
          placeholder="••••••••••"
          isPassword
          autoCapitalize="none"
          component={renderField}
        />
        <TouchableOpacity
          style={styles.submitTestWrapper}
          onPress={handleSubmit(this.onSubmit)}
        >
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
        <Text>{this.renderError}</Text>

      </View>
    );
  }
}

export default reduxForm({
  form: "login", // a unique identifier for this form
  validate: loginValidate
})(LoginFormComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#16a085",
    padding: 25
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 30
  },
  submitButtonText: {
    backgroundColor: "steelblue",
    color: "white",
    fontSize: 16,
    height: 40,
    width: 200,
    textAlign: "center",
    padding: 10
  },
  submitTestWrapper: {
    margin: 10,
    alignItems: "center"
  },
  textError: {
    color: "red"
  }
});
