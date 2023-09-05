import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import UiText from "./UiText/UiText.android";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ItemList({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.itemcontainer}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.details}>
              <UiText style={styles.title} numberOfLines={1}>
                {title}
              </UiText>
              {subTitle && (
                <UiText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </UiText>
              )}
            </View>
            <MaterialCommunityIcons
              color={colors.medium}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  itemcontainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  subTitle: {
    fontSize: 14,
    color: "grey",
  },
  details: {
    marginLeft: 15,
    justifyContent: "center",
    flex: 1,
  },
});
export default ItemList;
