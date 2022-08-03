import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { useTheme } from "styled-components/native";

import TabRoutes from "./tab.routes";
import LoginRoutes from "./login.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  const { COLORS } = useTheme();

  const navigatorConfig = {
    initialRouteName: "LoginStack",
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <>
      <NavigationContainer>
        <Navigator {...navigatorConfig}>
          <Screen name="LoginStack" component={LoginRoutes} />
          <Screen name="AppStack" component={TabRoutes} />
        </Navigator>
      </NavigationContainer>

      <StatusBar animated style="light" backgroundColor={COLORS.STATUSBAR} />
    </>
  );
}
