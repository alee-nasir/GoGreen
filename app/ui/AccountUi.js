import React from "react";
import SafeAreaScreen from "../components/SafeAreaScreen";
import ItemList from "../components/ItemList";
import { FlatList, StyleSheet } from "react-native";
import { View } from "react-native";
import colors from "../config/colors";
import IconComponent from "../components/IconComponent";
import Separator from "../components/Separator";

const accountItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountUi(props) {
  return (
    <SafeAreaScreen style={styles.accountbackground}>
      <View style={styles.accountcontainer}>
        <ItemList
          title="Jack Hamilton"
          subTitle="jackhamilton@gmail.com"
          image={require("../assets/seller.jpg")}
        />
      </View>
      <View style={styles.accountcontainer}>
        <FlatList
          data={accountItems}
          ItemSeparatorComponent={Separator}
          keyExtractor={(accountItems) => accountItems.title}
          renderItem={({ item }) => (
            <ItemList
              title={item.title}
              IconComponent={
                <IconComponent
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ItemList
        title="Sign out"
        IconComponent={
          <IconComponent name="logout" backgroundColor={colors.warning} />
        }
      />
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  accountcontainer: {
    marginVertical: 10,
  },
  accountbackground: {
    backgroundColor: colors.light,
  },
});

export default AccountUi;
