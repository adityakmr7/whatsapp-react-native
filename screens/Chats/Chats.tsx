import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { userList } from "../../services/data";
import { userListProps } from "../../services/interface";
import { Feather as Icon } from "@expo/vector-icons";
import { LIGHT_COLOR, SECONDARY_LIGHT } from "../../constants/colors";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface ChatsProps {}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wWidth - 20,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "grey",
  },
  silentText: {
    color: "grey",
  },
  floatingContainer: {
    backgroundColor: SECONDARY_LIGHT,
    width: 70,
    height: 70,
    borderRadius: 35,
    position: "absolute",
    right: 10,
    bottom: 20,
  },
  iconBox: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});

const Chats = ({}: ChatsProps) => {
  const renderItem = ({ item }: { item: userListProps }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarBox}></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: wWidth - 80,
              paddingBottom: 15,
              paddingTop: 10,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: "grey",
            }}
          >
            <View style={{ paddingLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text style={styles.silentText}>{item.lastMessage}</Text>
            </View>
            <View>
              <Text style={styles.silentText}>{item.lastSeen}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={userList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View>
        <View style={styles.floatingContainer}>
          <View style={styles.iconBox}>
            <Icon name="message-square" size={30} color={"#ffffff"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chats;
