import React from "react";
import SafeAreaScreen from "../components/SafeAreaScreen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Balck Pepper Plant",
    price: 89.99,
    image: require("../assets/blackpepper.jpg"),
  },
  {
    id: 2,
    title: "Gold Rose ",
    price: 100,
    image: require("../assets/rose.jpg"),
  },
];
function ListingsUi(props) {
  return (
    <SafeAreaScreen style={styles.screencontainer}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imagePath={item.image}
          />
        )}
      />
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  screencontainer: {
    padding: 15,
    backgroundColor: colors.light,
  },
});

export default ListingsUi;
