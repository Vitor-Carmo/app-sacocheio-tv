import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import { TabBar } from "../components";
import HomeRoutes from "./home.routes";
import PodcastsRoutes from "./podcast.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  const navigatorConfig = {
    initialRouteName: "Home",
    screenOptions: {
      headerShown: false,
    },
    tabBar: (props: BottomTabBarProps) => <TabBar {...props} />,
  };

  return (
    <Navigator {...navigatorConfig}>
      <Screen name="Home" component={HomeRoutes} />
      <Screen name="Programas" component={PodcastsRoutes} />
      <Screen name="Biblioteca" component={HomeRoutes} />
    </Navigator>
  );
}
