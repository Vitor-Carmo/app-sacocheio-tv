import React from "react";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import dark from "./src/themes/dark";

import AppStack from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={dark}>
      <AppStack></AppStack>
    </ThemeProvider>
  );
}
