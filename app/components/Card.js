import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import UiText from "./UiText/UiText";

function Card({ title, subTitle, imagePath }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imagePath} />
      <View style={styles.details}>
        <UiText style={styles.title}>{title}</UiText>
        <UiText style={styles.subTitle}>{subTitle}</UiText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
