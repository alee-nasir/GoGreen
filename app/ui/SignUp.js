import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import SafeAreaScreen from "../components/SafeAreaScreen";
import {
  FormComponent,
  FormFieldComponent,
  Submit_Button,
} from "../components/form";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignUp() {
  return (
    <SafeAreaScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/greenlogo2.png")} />
      <FormComponent
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormFieldComponent
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormFieldComponent
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormFieldComponent
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Submit_Button title="Sign Up" />
      </FormComponent>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.lightGoogle,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 30,
  },
});

export default SignUp;
