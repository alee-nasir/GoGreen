import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import ButtonUi from "../components/ButtonUi";
/**
 * The default status bar height for the device. Does not factor in changes when location tracking
 * is in use or a phone call is active.
 */
function WelcomeUi(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/greenwelcome.jpg")}
    >
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../assets/greenlogo.png")}
        />
        <Text style={styles.slogan}>Live & Breathe Life</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <ButtonUi title="Sign In" />
        <ButtonUi title="Sign Up" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logocontainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 110,
  },
  slogan: {
    fontWeight: "600",
    color: "white",
    paddingVertical: 10,
  },
  buttoncontainer: {
    width: "90%",
  },
});

export default WelcomeUi;
