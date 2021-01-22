import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  GREY_COLOR,
  LIGHT_COLOR,
  PRIMARY,
  SECONDARY_LIGHT,
} from "../../constants/colors";
import { Feather as Icon, Entypo } from "@expo/vector-icons";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
interface StatusProps {}
const styles = StyleSheet.create({
  rootStatus: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  profileCardContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "grey",
  },
  plusContainer: {
    backgroundColor: SECONDARY_LIGHT,
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 16,
  },
  silent: {
    color: "grey",
  },
  section: {
    backgroundColor: GREY_COLOR,
    height: 30,
    justifyContent: "center",
  },
  floatingActionContainer: {
    position: "absolute",
    bottom: 10,
    right: 15,
    alignItems: "center",
  },
  create: {
    backgroundColor: GREY_COLOR,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  camera: {
    marginVertical: 10,
    backgroundColor: SECONDARY_LIGHT,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
interface profileCardProps {
  title: string;
  subTitle: string;
  create: boolean;
}
const ProfileCard = ({ title, subTitle, create }: profileCardProps) => {
  return (
    <View style={styles.profileCardContainer}>
      <View style={styles.avatar}>
        {create ? (
          <View style={styles.plusContainer}>
            <Icon name="plus" size={20} color={LIGHT_COLOR} />
          </View>
        ) : null}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.silent}>{subTitle}</Text>
      </View>
    </View>
  );
};

const Status = ({}: StatusProps) => {
  return (
    <View style={styles.rootStatus}>
      <ProfileCard
        create={true}
        title="My Status"
        subTitle="Tap to add status update"
      />
      <View style={styles.section}>
        <View style={{ marginHorizontal: 15 }}>
          <Text>Recent Updates</Text>
        </View>
      </View>
      <ProfileCard create={false} title="John Doe" subTitle="Today, 6:40 PM" />
      <View style={styles.floatingActionContainer}>
        <View style={styles.create}>
          <Entypo name="edit" size={20} color={PRIMARY} />
        </View>
        <View style={styles.camera}>
          <Entypo name="camera" size={26} color={LIGHT_COLOR} />
        </View>
      </View>
    </View>
  );
};

export default Status;
