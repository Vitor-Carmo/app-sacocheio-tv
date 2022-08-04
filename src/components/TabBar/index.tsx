import React, { FC } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SvgProps } from "react-native-svg";
import Home from "../../assets/svg/home.svg";
import Programs from "../../assets/svg/programas.svg";
import Library from "../../assets/svg/biblioteca.svg";

import { Container, Tab, TabTitle } from "./styles";

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { COLORS } = useTheme();

  const icons: { [key: string]: FC<SvgProps> } = {
    Home,
    Programs,
    Library,
  };

  return (
    <Container colors={[COLORS.TAB_BAR_OPACITY, COLORS.TAB_BAR]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        ) as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableWithoutFeedback
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole="button"
            testID={options.tabBarTestID}
            accessibilityLabel={options.tabBarAccessibilityLabel}
          >
            <Tab isFocused={isFocused}>
              {icons[route.name]({})}
              <TabTitle>{label}</TabTitle>
            </Tab>
          </TouchableWithoutFeedback>
        );
      })}
    </Container>
  );
}
