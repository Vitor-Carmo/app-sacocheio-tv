import React from "react";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Poppins_600SemiBold, Poppins_300Light, Poppins_700Bold } from "@expo-google-fonts/poppins";

import dark from "./src/themes/dark";

import AppStack from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={dark}>
      <AppStack />
    </ThemeProvider>
  );
}
