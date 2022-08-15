import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Library from "../screens/Library";

const { Navigator, Screen } = createNativeStackNavigator();

export default function LibraryRoutes() {
  const navigatorConfig = {
    initialRouteName: "Library",
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Navigator {...navigatorConfig}>
      <Screen name="Library" component={Library} />
    </Navigator>
  );
}
