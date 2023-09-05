import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../config/defaultStyles";

function UiText({ children }) {
  return <Text style={defaultStyles.text}>{children}</Text>;
}

export default UiText;
