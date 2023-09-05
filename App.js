import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeUi from "./app/ui/WelcomeUi";
import MainView from "./app/ui/MainView";
import CardList from "./app/components/CardList";
import CardDetails from "./app/ui/CardDetails";
import Inbox from "./app/ui/Inbox";
import SafeAreaScreen from "./app/components/SafeAreaScreen";
import IconComponent from "./app/components/IconComponent";
import ItemList from "./app/components/ItemList";
import AccountUi from "./app/ui/AccountUi";
import ListingsUi from "./app/ui/ListingsUi";
import Text_Input from "./app/components/Text_Input";
import PickerComponent from "./app/components/PickerComponent";
import { useState } from "react";
import Signin from "./app/ui/Signin";
import ListingEditUi from "./app/ui/ListingEditUi";

export default function App() {
  return <ListingEditUi />;
}
