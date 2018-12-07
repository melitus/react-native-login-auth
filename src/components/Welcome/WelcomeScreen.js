import React from "react";
import { ScrollView, Text, View, Button } from "react-native";

const WelcomeScreen = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 27 }}>Welcome to fullstack test</Text>
      <View style={{ margin: 20 }} />
    </ScrollView>
  );
};

export default WelcomeScreen;
