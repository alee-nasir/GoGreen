import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import Theme from "./app/Navigation/themeNavigation";
import themeNavigation from "./app/Navigation/themeNavigation";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={themeNavigation}>
      <AppNavigator />
    </NavigationContainer>
  );
}
