import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function SwipeDelete({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteaction}>
        <MaterialCommunityIcons name="delete" color={colors.white} size={30} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  deleteaction: {
    backgroundColor: colors.danger,
    width: 70,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SwipeDelete;
