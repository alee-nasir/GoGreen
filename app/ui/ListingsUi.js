import React, { useState, useEffect } from "react";
import SafeAreaScreen from "../components/SafeAreaScreen";
import { FlatList, StyleSheet, View } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../Navigation/routes";
import listingsApi from "../api/listings";
import UiText from "../components/UiText/UiText.android";
import ButtonUi from "../components/ButtonUi";
import useApi from "../customHooks/useApi";

function ListingsUi({ navigation }) {
  const {
    data: listings,
    error,
    loader,
    fetchData: fetchListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <SafeAreaScreen style={styles.screencontainer}>
      {error && (
        <>
          <UiText>Could'nt retrieve the listings.</UiText>
          <ButtonUi title="Retry" onPress={fetchListings} color="danger" />
        </>
      )}
      <ActivityIndicator visible={loader} />
      <View style={styles.listcontainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imagePath={item.images[0].url}
              onPress={() => navigation.navigate(routes.CARD_DETAILS, item)}
            />
          )}
        />
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  screencontainer: {
    backgroundColor: colors.light,
  },
  listcontainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    marginTop: 20,
  },
});

export default ListingsUi;
