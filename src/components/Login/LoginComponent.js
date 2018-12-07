import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { renderField } from "../Field";
import loginValidate from "./LoginValidate";

class LoginFormComponent extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = formProps => {
    this.props.onLogin(formProps, () => {
      console.log("form valuse", formProps);
      this.props.navigation.navigate("welcome");
    });
  };

    render() {
        const { handleSubmit} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>login form</Text>
                <Field
                    keyboardType="email-address"
                    returnKeyType="next"
                    label="Email: "
                    component={renderField}
                    name="Email"
                    placeholder="Email"
                />
                <Field
                    keyboardType="default"
                    returnKeyType="go"
                    label="Password: "
                    secureTextEntry
                    component={renderField}
                    name="Password"
                    placeholder="••••••••••"
                    type="password"
                />
                <TouchableOpacity
                    style={styles.submitTestWrapper}
                    onPress={handleSubmit(this.onSubmit)}
                >
                    <Text style={styles.submitButtonText} >login</Text>
                </TouchableOpacity>
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
  }
});
