import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export default function LoginRoutes() {
  const navigatorConfig = {
    initialRouteName: "SignIn",
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Navigator {...navigatorConfig}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
