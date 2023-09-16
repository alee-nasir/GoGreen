import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};
const Tweet = ({ navigation }) => (
  <View>
    <Text>Tweet</Text>
    <Button title="Tweet" onPress={() => navigation.navigate("TweetDetails")} />
  </View>
);
const TweetDetails = ({ navigation }) => (
  <View>
    <Text>TweetDetails</Text>
  </View>
);
const News = ({ navigation }) => (
  <View>
    <Text>News</Text>
    <Button
      title="NewsDetails"
      onPress={() => navigation.navigate("NewsDetails")}
    />
  </View>
);
const NewsDetails = ({ navigation }) => (
  <View>
    <Text>NewsDetails</Text>
  </View>
);

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweet" component={Tweet} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="NewsDetails" component={NewsDetails} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen name="AccountScreen" component={AccountNavigator} />
    <Tab.Screen name="HomeScreen" component={HomeNavigator} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
