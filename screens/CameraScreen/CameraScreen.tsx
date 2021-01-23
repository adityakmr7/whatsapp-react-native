import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { combineTabWithStackProps } from "../../container/Main";

interface CameraScreenProps {
  navigation: combineTabWithStackProps<"camera">;
}
const CameraScreen = ({ navigation }: CameraScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>Camera Screen</Text>
    </View>
  );
};

export default CameraScreen;
