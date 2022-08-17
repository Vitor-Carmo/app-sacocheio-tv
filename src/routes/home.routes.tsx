import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeRoutes() {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeScreen" component={Home} />
    </Navigator>
  );
}
