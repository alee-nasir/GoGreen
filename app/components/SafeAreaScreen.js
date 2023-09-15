import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function SafeAreaScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screenview, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenview: {
    paddingTop: Constants.statusBarHeight,
    padding: 5,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default SafeAreaScreen;
