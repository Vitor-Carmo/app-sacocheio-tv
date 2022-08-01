import React from "react";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import {
  Poppins_600SemiBold,
  Poppins_300Light,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import dark from "./src/themes/dark";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={dark}>
      <Routes />
    </ThemeProvider>
  );
}
