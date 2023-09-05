import React from "react";
import UiText from "../UiText/UiText.android";
import { StyleSheet } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <UiText style={styles.error}>{error}</UiText>;
}

const styles = StyleSheet.create({
  error: { color: "red", fontSize: 14 },
});

export default ErrorMessage;
