import React from "react";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootState, useTypedSelector } from "../store";
import { Audio } from "expo-av";

import {
  HomeIcon,
  ProgramsIcon,
  LibraryIcon,
  AudioPlayer,
  Connection,
} from "../components";

import { DIMENSIONS } from "../constants";

import HomeRoutes from "./home.routes";
import ProgramsRoutes from "./programs.routes";
import LibraryRoutes from "./library.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  const { COLORS } = useTheme();

  const playbackInstance = useTypedSelector<Audio.Sound | null>(
    (state: RootState) => state.podcast.playbackInstance
  );

  const screens = [
    {
      label: "Home",
      name: "Home",
      component: HomeRoutes,
      icon: HomeIcon,
    },
    {
      label: "Programas",
      name: "Programs",
      component: ProgramsRoutes,
      icon: ProgramsIcon,
    },
    {
      label: "Biblioteca",
      name: "Libraries",
      component: LibraryRoutes,
      icon: LibraryIcon,
    },
  ];

  return (
    <>
      <Connection />

      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 105,
            backgroundColor: COLORS.BACKGROUND,
            borderTopWidth: 1,
            borderTopColor: COLORS.BORDER,
            marginTop: !playbackInstance ? 0 : DIMENSIONS.AUDIO_PLAYER_HEIGHT,
            zIndex: 1,
          },
        }}
      >
        {screens.map(({ name, component, icon, label }, index) => (
          <Screen
            key={index}
            name={name}
            component={component}
            options={{
              tabBarLabel: label,
              tabBarActiveTintColor: COLORS.TEXT,
              tabBarInactiveTintColor: COLORS.TEXT_50,
              tabBarButton: (props) => (
                <TouchableOpacity activeOpacity={0.7} {...props} />
              ),
              tabBarLabelStyle: {
                fontFamily: "Poppins_400Regular",
                fontSize: 10,
              },
              tabBarIcon: ({ focused }) =>
                icon({
                  opacity: focused ? 1 : 0.5,
                }),
            }}
          />
        ))}
      </Navigator>
      <AudioPlayer />
    </>
  );
}
