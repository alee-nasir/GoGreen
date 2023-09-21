import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import UiText from "./UiText/UiText";

function Card({ title, subTitle, imagePath, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, styles.shadowProp]}>
        <Image style={styles.image} source={{ uri: imagePath }} />
        <View style={styles.details}>
          <UiText style={styles.title}>{title}</UiText>
          <UiText style={styles.subTitle}>{subTitle}</UiText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 10,
  },
  title: { fontSize: 16, marginBottom: 5 },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 15,
  },
  shadowProp: {
    shadowColor: "#71797E",
    elevation: 3,
  },
});

export default Card;
