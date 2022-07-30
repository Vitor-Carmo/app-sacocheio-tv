import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";


const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeRoutes() {
  const navigatorConfig = {
    initialRouteName: "HomeScreen",
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Navigator {...navigatorConfig}>
      <Screen name="HomeScreen" component={Home} />
    </Navigator>
  );
}
