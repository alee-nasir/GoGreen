import React from "react";
import { View, StyleSheet } from "react-native";
import IconComponent from "./IconComponent";
import UiText from "./UiText/UiText.android";

function CategoryPicker({ item, onPress }) {
  return (
    <View style={styles.container}>
      <IconComponent
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={60}
      />
      <UiText style={styles.label}>{item.label}</UiText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "33%",
    marginTop: 20,
  },

  label: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
});

export default CategoryPicker;
