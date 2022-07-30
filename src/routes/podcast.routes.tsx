import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PodcastsList from "../screens/PodcastsList";

const { Navigator, Screen } = createNativeStackNavigator();

export default function PodcastRoutes() {
  const navigatorConfig = {
    initialRouteName: "PodcastList",
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Navigator {...navigatorConfig}>
      <Screen name="PodcastsList" component={PodcastsList} />
    </Navigator>
  );
}
