import React from "react";
import { View, StyleSheet } from "react-native";
import IconComponent from "./IconComponent";
import UiText from "./UiText/UiText.android";
import { TouchableOpacity } from "react-native";

function CategoryPicker({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconComponent
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={60}
        />
      </TouchableOpacity>
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
