import React from "react";
0;
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import GoBack from "../GoBack";
import {
  useAnimatedStyle,
  interpolateColor,
  interpolate,
  SharedValue,
  Extrapolate,
} from "react-native-reanimated";

import { Container, Title, GoBackOpacity } from "./styles";

interface HeaderProps {
  title?: string;
  scrollY: SharedValue<number>;
}

export default function Header({ title, scrollY }: HeaderProps) {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const headerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [40, 150],
        [`${COLORS.BACKGROUND}00`, COLORS.STATUSBAR]
      ),
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [120, 250],
        [0, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const handlePressGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Container style={headerStyle}>
      <GoBackOpacity onPress={handlePressGoBack}>
        <GoBack size={20} />
      </GoBackOpacity>
      <Title style={titleStyle}>{title}</Title>
    </Container>
  );
}
