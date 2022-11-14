import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import TabRoutes from "./tab.routes";
import AuthenticationRoutes from "./authentication.routes";
import { RootState } from "../store";
import { useNavigationTheme } from "../hooks";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  const { COLORS } = useTheme();
  const navigationTheme = useNavigationTheme();
  const token = useSelector<RootState>((state) => state.auth.token);

  return (
    <NavigationContainer theme={navigationTheme}>
      <Navigator
        screenOptions={{
          headerShown: false,
          navigationBarColor: COLORS.BACKGROUND,
          statusBarColor: COLORS.STATUSBAR,
          statusBarAnimation: "slide",
        }}
      >
        {token ? (
          <Screen name="AppStack" component={TabRoutes} />
        ) : (
          <Screen name="AuthenticationStack" component={AuthenticationRoutes} />
        )}
      </Navigator>
    </NavigationContainer>
  );
}
