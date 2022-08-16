import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LibraryHeader } from "../../components";
import { Container } from "./styles";
import LIBRARY_SCREENS from "../../constants/library_screens";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Library() {
  return (
    <Container>
      <Navigator
        screenOptions={{
          animation: "none",
          header: (props) => <LibraryHeader {...props} />,
        }}
      >
        {LIBRARY_SCREENS.map((screen, index) => (
          <Screen
            key={index}
            name={screen.screen.name}
            initialParams={{
              filterLabel: screen.filterLabel,
            }}
            component={screen.screen.component}
          />
        ))}
      </Navigator>
    </Container>
  );
}
