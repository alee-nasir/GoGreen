import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import UiText from "./UiText/UiText.android";

function PickerItemComponent({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <UiText style={styles.text}>{item.label}</UiText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});

export default PickerItemComponent;
