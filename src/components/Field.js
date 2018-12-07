import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

// Passing Custom Reusable Components to Field
export const renderField = ({ label, keyboardType, name }) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput style={styles.textInput} keyboardType={keyboardType} />
    </View>
  );
};

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
