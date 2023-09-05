import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../config/defaultStyles";

function UiText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default UiText;
