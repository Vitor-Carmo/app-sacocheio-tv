import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import MarqueeText from "react-native-marquee";

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
  TitleContainer,
} from "./styles";

interface HeaderProps {
  title?: string;
  scrollY: SharedValue<number>;
  backgroundColor?: string;
  onPressGoBack?: () => void;
}

export default function Header({
  title,
  scrollY,
  backgroundColor = "#202020",
  onPressGoBack,
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
    if (onPressGoBack) {
      onPressGoBack();
      return;
    }

    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Container style={headerStyle}>
      <GoBackOpacity onPress={handlePressGoBack}>
        <GoBack size={20} />
      </GoBackOpacity>

      <TitleContainer style={opacityStyle}>
        <MarqueeText speed={0.3} marqueeOnStart loop delay={1000}>
          <Title>{title}</Title>
        </MarqueeText>
      </TitleContainer>

      <OptionsContainer style={opacityStyle}>
        {/*    <OpacityTouchable>
          <Options borderColor={COLORS.TEXT} size={3.8} />
        </OpacityTouchable> */}
      </OptionsContainer>
    </Container>
  );
}
