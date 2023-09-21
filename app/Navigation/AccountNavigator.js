import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountUi from "../ui/AccountUi";
import Inbox from "../ui/Inbox";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{ presentation: "modal", animation: "slide_from_right" }}
  >
    <Stack.Screen
      name="AccountScreen"
      component={AccountUi}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Inbox" component={Inbox} />
  </Stack.Navigator>
);

export default AccountNavigator;
