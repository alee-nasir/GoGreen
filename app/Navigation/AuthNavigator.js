import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeUi from "../ui/WelcomeUi";
import Signin from "../ui/Signin";
import SignUp from "../ui/SignUp";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeUi}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signin"
      component={Signin}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={SignUp}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
