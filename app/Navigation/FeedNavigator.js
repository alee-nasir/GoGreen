import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsUi from "../ui/ListingsUi";
import CardDetails from "../ui/CardDetails";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "modal",
      animation: "slide_from_right",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Listings" component={ListingsUi} />
    <Stack.Screen name="CardDetails" component={CardDetails} />
  </Stack.Navigator>
);

export default FeedNavigator;
