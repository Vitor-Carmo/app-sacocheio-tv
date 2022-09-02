import React, { ReactNode, useEffect } from "react";
import { StatusBar, setStatusBarBackgroundColor } from "expo-status-bar";
import { ViewProps } from "react-native";
import { useTheme } from "styled-components";

import { HexToHSL } from "../../helpers";

import { Container } from "./styles";

interface GradientContainerProps extends ViewProps {
  children?: ReactNode;
  color?: string;
  opacity?: number
}

export default function GradientContainer({
  children,
  color = "#806E42",
  opacity = 1,
  ...props
}: GradientContainerProps) {
  const { COLORS, DIMENSIONS } = useTheme();

  return (
    <Container
      colors={[
        HexToHSL(color, DIMENSIONS.HSL_LIGHTNESS, opacity),
        COLORS.BACKGROUND,
        COLORS.BACKGROUND,
        COLORS.BACKGROUND,
      ]}
      {...props}
    >
      {children}
    </Container>
  );
}
