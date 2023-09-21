import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import ButtonUi from "../components/ButtonUi";
import colors from "../config/colors";
import routes from "../Navigation/routes";

function WelcomeUi({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/green2.jpg")}
    >
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../assets/greenlogo1.png")}
        />
        <Text style={styles.slogan}>Live & Breathe Life</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <ButtonUi
          title="Sign In"
          onPress={() => navigation.navigate(routes.SIGN_IN)}
        />
        <ButtonUi
          title="Sign Up"
          color="secondary"
          onPress={() => navigation.navigate(routes.SIGN_UP)}
        />
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
    width: 130,
    height: 130,
  },
  slogan: {
    fontWeight: "600",
    color: colors.primary,
    paddingVertical: 10,
  },
  buttoncontainer: {
    width: "90%",
    marginBottom: 40,
  },
});

export default WelcomeUi;
