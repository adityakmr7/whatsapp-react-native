import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { userList } from "../../services/data";
import { userListProps } from "../../services/interface";
import { Feather as Icon } from "@expo/vector-icons";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface ChatsProps {}

const Chats = ({}: ChatsProps) => {
  const renderItem = ({ item }: { item: userListProps }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: wWidth - 20,
          marginVertical: 5,
          marginHorizontal: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: "grey",
            }}
          ></View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.lastMessage}</Text>
          </View>
        </View>

        <View>
          <Text>{item.lastSeen}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View>
        <View
          style={{
            backgroundColor: "green", // TODO Update The Color
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            right: 10,
            bottom: 20,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Icon name="message-square" size={30} color={"#ffffff"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chats;
