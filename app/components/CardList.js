import React from "react";
import { View } from "react-native";
import Card from "./Card";

function CardList(props) {
  return (
    <View style={{ backgroundColor: "#f7f7f5", padding: 20, paddingTop: 100 }}>
      <Card
        title="Gold Rose Plant for sale"
        subTitle="$100"
        imagePath={require("../assets/rose.jpg")}
      />
    </View>
  );
}

export default CardList;
