import React from "react";
import { Image, View, StyleSheet } from "react-native";
import UiText from "../components/UiText/UiText.android";
import colors from "../config/colors";
import ItemList from "../components/ItemList";
function CardDetails(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/rose.jpg")} />
      <View style={styles.details}>
        <UiText style={styles.title}>Gold Rose For Sale</UiText>
        <UiText style={styles.price}>$100</UiText>
        <View style={styles.sellercontainer}>
          <ItemList
            image={require("../assets/seller.jpg")}
            title="Jack Markov"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    padding: 15,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
  },
  price: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: "bold",
  },
  sellercontainer: {
    marginVertical: 30,
  },
});

export default CardDetails;
