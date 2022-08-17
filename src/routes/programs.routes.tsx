import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Programs from "../screens/Programs";
import Program from "../screens/Program";
import Podcast from "../screens/Podcast";

const { Navigator, Screen } = createNativeStackNavigator();

export default function ProgramsRoutes() {
  return (
    <Navigator
      initialRouteName="ProgramsList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="ProgramsList" component={Programs} />
      <Screen name="Program" component={Program} />
      <Screen name="Podcast" component={Podcast} />
    </Navigator>
  );
}
