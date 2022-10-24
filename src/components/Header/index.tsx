import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import GoBack from "../GoBack";
import Options from "../Options";
import {
  useAnimatedStyle,
  interpolateColor,
  interpolate,
  SharedValue,
  Extrapolate,
} from "react-native-reanimated";

import {
  Container,
  Title,
  GoBackOpacity,
  OptionsContainer,
  OpacityTouchable,
} from "./styles";

interface HeaderProps {
  title?: string;
  scrollY: SharedValue<number>;
  backgroundColor?: string;
}

export default function Header({
  title,
  scrollY,
  backgroundColor = "#202020",
}: HeaderProps) {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const headerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [40, 150],
        [`${COLORS.BACKGROUND}00`, backgroundColor]
      ),
    };
  });

  const opacityStyle = useAnimatedStyle(() => {
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
      <Title style={opacityStyle}>{title}</Title>

      <OptionsContainer style={opacityStyle}>
        <OpacityTouchable>
          <Options borderColor={COLORS.TEXT} size={3.8} />
        </OpacityTouchable>
      </OptionsContainer>
    </Container>
  );
}
