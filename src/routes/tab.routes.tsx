import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import { TabBar } from "../components";
import Home from "../screens/Home";

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
      <Screen name="Home" component={Home} />
      <Screen name="Programas" component={Home} />
      <Screen name="Biblioteca" component={Home} />
    </Navigator>
  );
}
