import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/defaultStyles";
import UiText from "./UiText/UiText.android";
import PickerItemComponent from "./PickerItemComponent";
import SafeAreaScreen from "./SafeAreaScreen";
import colors from "../config/colors";

function PickerComponent({
  icon,
  items,
  onSelectItem,
  placeholder,
  numberOfColumns = 3,
  CustomPickerItem = PickerItemComponent,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.dark}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <UiText style={styles.text}>{selectedItem.label}</UiText>
          ) : (
            <UiText style={styles.placeholder}>{placeholder}</UiText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.dark}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button
          style={styles.closebutton}
          title="Close"
          onPress={() => setModalVisible(false)}
        />
        <SafeAreaScreen>
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <CustomPickerItem
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeAreaScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 12,
    alignItems: "center",
  },
  icon: {
    marginLeft: -20,
  },
  text: { flex: 1 },
  placeholder: { color: defaultStyles.colors.lightMedium, flex: 1 },
});

export default PickerComponent;
