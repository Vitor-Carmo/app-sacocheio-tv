import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import { TabBar } from "../components";
import HomeRoutes from "./home.routes";
import ProgramsRoutes from "./programs.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  const navigatorConfig = {
    initialRouteName: "Home",

    screenOptions: {
      headerShown: false,
      tabBarHideOnKeyboard: true
    },

    tabBar: (props: BottomTabBarProps) => <TabBar {...props} />,
  };

  return (
    <Navigator {...navigatorConfig}>
      <Screen name="Home" component={HomeRoutes} />
      <Screen name="Programs" component={ProgramsRoutes} />
      <Screen name="Biblioteca" component={HomeRoutes} />
    </Navigator>
  );
}
