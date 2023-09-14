import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import SafeAreaScreen from "../components/SafeAreaScreen";
import {
  FormComponent,
  FormFieldComponent,
  Submit_Button,
} from "../components/form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Signin(props) {
  return (
    <SafeAreaScreen>
      <Image style={styles.logo} source={require("../assets/greenlogo.png")} />
      <FormComponent
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormFieldComponent
          icon="email"
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <FormFieldComponent
          icon="lock"
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <Submit_Button title="Sign in" />
      </FormComponent>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 70,
  },
});

export default Signin;
