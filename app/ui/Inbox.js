import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ItemList from "../components/ItemList";
import Separator from "../components/Separator";
import SafeAreaScreen from "../components/SafeAreaScreen";
import SwipeDelete from "../components/SwipeDelete";

const firstMessages = [
  {
    id: 1,
    title: "Jack Hamilton",
    description:
      "Hi, I was looking for this item and i guess the item is out of stock! please inform me when this item will be available?",
    image: require("../assets/seller.jpg"),
  },
  {
    id: 2,
    title: "Jack Hamilton",
    description:
      "Thanks for infroming me i am going to buy the item right away :)",
    image: require("../assets/seller.jpg"),
  },
];

function Inbox(props) {
  const [messages, setMessages] = useState(firstMessages);
  const [refresh, setRefresh] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <SafeAreaScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ItemList
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message", item)}
            renderRightActions={() => (
              <SwipeDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refresh}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../assets/seller.jpg"),
            },
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/seller.jpg"),
            },
          ]);
        }}
      />
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({});

export default Inbox;
