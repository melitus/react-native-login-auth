import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

// Passing Custom Reusable Components to Field
export const renderField = ({
  input: { onChange, ...restInput }, 
  placeholder, 
  isPassword, 
  autoCapitalize,
  isEmail, 
  meta: { touched, error},
}) => (
  <View style={{ width: '100%', paddingBottom: 15 }}>
    <TextInput
      onChangeText={onChange}
      style={[styles.textInput, { width: '100%' }]}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      secureTextEntry={isPassword || false}
      keyboardType={isEmail ? 'email-address' : 'default'}
      {...restInput}
    />
    {touched && error && <Text style={{ color: 'red', fontWeight: 'bold' }}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center"
  },
  labelText: {
    fontSize: 14,
    fontWeight: "bold",
    width: 80
  },
  textInput: {
    borderColor: "#16a085",
    borderWidth: 1,
    height: 37,
    width: 220,
    padding: 5
  }
});
