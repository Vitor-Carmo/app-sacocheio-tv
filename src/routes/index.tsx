import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useTheme } from "styled-components/native";

import TabRoutes from "./tab.routes";
import AuthenticationRoutes from "./authentication.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  const { COLORS } = useTheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.BACKGROUND,
      border: "transparent",
    },
  };

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Navigator
          initialRouteName="AuthenticationStack"
          screenOptions={{
            headerShown: false,
            navigationBarColor: COLORS.BACKGROUND,
          }}
        >
          <Screen name="AuthenticationStack" component={AuthenticationRoutes} />
          <Screen name="AppStack" component={TabRoutes} />
        </Navigator>
      </NavigationContainer>

      <StatusBar animated style="light" backgroundColor={COLORS.STATUSBAR} />
    </>
  );
}
