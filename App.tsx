import React from "react";
import { Toast } from "./src/components";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApplicationContainer } from "./src/components";
import store from "./src/store";

import dark from "./src/themes/dark";
import Routes from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <ApplicationContainer>
            <Routes />
          </ApplicationContainer>
          <Toast />
        </Provider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
