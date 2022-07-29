import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import TabRoutes from "./tab.routes";

export default function Routes() {
  const { COLORS } = useTheme();

  return (
    <>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>

      <StatusBar
        animated
        style="light"
        backgroundColor={COLORS.STATUSBAR_COLOR}
      />
    </>
  );
}
