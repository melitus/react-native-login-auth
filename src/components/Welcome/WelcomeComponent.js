import React from "react";
import { ScrollView, Text, View, Picker } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { locales } from "../../Locales";

const WelcomeScreen = props => {
  const { locale } = props.store;
  const options = Object.keys(locales);
  return (
    <View>
      <ModalDropdown
        defaultValue="en"
        options={options}
        onSelect={(item, value) => props.changeLocale(value)}
        style={{ padding: 20 }}
        dropdownStyle={{ padding: 10, width: 100 }}
      />
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 27 }}>{locale}</Text>
        <View style={{ margin: 20 }} />
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;
