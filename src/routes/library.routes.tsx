import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Library from "../screens/Library";

const { Navigator, Screen } = createNativeStackNavigator();

export default function LibraryRoutes() {
  return (
    <Navigator
      initialRouteName="Library"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Library" component={Library} />
    </Navigator>
  );
}
