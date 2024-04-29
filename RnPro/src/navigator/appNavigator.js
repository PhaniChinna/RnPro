import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "../screen/firstScreen";
import SecondScreen from "../screen/secondScreen";
import AboutScreen from "../screen/AboutScreen";
import ProfileScreen from "../screen/ProfileScreen";
import TabBatIon from "../components/TabBarIcon";
import TabBarName from "../components/TabBarText";
import { themeColor, useTheme } from "react-native-rapi-ui";

const stackNavigator = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function MainTabs() {
  let { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.black100 : "white", // Set border color based on dark mode
          backgroundColor: isDarkmode ? themeColor.black100 : "white", // Set background color based on dark mode
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={FirstScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabBarName title="Home" />,
          tabBarIcon: ({ focused }) => <TabBatIon icon={"home"} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabBarName title="About" />,
          tabBarIcon: ({ focused }) => <TabBatIon icon={"info-circle"} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabBarName title="Profile" />,
          tabBarIcon: ({ focused }) => <TabBatIon icon={"person-booth"} />,
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <stackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <stackNavigator.Screen name="MainTabs" component={MainTabs} />
        <stackNavigator.Screen name="Second" component={SecondScreen} />
      </stackNavigator.Navigator>
    </NavigationContainer>
  );
}
