import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Chats from "../screens/Chats";
import Status from "../screens/Status";
import Calls from "../screens/Calls";

interface MainProps {}

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MaterialTopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  );
};

const Main = ({}: MainProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({ navigation, route }) => ({
            title: "WhatsApp",
            headerStyle: {
              elevation: 0,
            },
            headerRight: () => {
              return (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => console.log("Search")}
                    style={{ marginHorizontal: 5 }}
                  >
                    <Icon name="search" size={26} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => console.log("menu Clicked")}
                    style={{ marginHorizontal: 5 }}
                  >
                    <Icon name="more-vertical" size={26} />
                  </TouchableOpacity>
                </View>
              );
            },
          })}
          name="home"
          component={MaterialTopTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
