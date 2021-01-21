import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { userList } from "../../services/data";
import { userListProps } from "../../services/interface";
import { Feather as Icon } from "@expo/vector-icons";
import { LIGHT_COLOR, SECONDARY_LIGHT } from "../../constants/colors";
import ProfileCards from "../../components";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface ChatsProps {}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
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
    return <ProfileCards {...{ item }} />;
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
