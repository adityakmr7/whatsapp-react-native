import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { call } from "react-native-reanimated";
import { userListProps } from "../services/interface";
import { Ionicons as Icon, MaterialIcons } from "@expo/vector-icons";
import { PRIMARY, SECONDARY_LIGHT } from "../constants/colors";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface ProfileCardsProps {
  item: userListProps;
  call?: boolean;
}

const styles = StyleSheet.create({
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
});
const ProfileCards = ({ item, call }: ProfileCardsProps) => {
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {call ? (
                <MaterialIcons
                  name="call-made"
                  size={15}
                  color={SECONDARY_LIGHT}
                />
              ) : null}
              <Text style={styles.silentText}>{item.lastMessage}</Text>
            </View>
          </View>
          <View>
            {call ? (
              <Icon name="md-call" size={26} color={PRIMARY} />
            ) : (
              <Text style={styles.silentText}>{item.lastSeen}</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCards;
