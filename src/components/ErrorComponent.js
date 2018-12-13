import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Error = props => {
  const { error } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error.replace("child", "")}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 15
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white"
  }
});
