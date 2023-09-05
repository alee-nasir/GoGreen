import React from "react";
import { View } from "react-native";
import { Image, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UiText from "../components/UiText/UiText";
import ButtonUi from "../components/ButtonUi";
import colors from "../config/colors";

function MainView(props) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" color="black" size={30} />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="tomato"
          size={30}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/mainviewimage.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" },
  maincontainer: {
    top: 40,
    backgroundColor: "",
    flex: 1,
  },
  closeButton: {
    position: "absolute",
    top: 60,
    left: 30,
  },
  deleteButton: {
    position: "absolute",
    top: 60,
    right: 30,
  },
});

export default MainView;
