import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageComponent({ imagePath }) {
  return (
    <View style={styles.container}>
      {!imagePath && (
        <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />
      )}
      {imagePath && <Image source={{ uri: imagePath }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageComponent;
