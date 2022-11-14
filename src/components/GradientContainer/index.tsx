import React, { ReactNode, useEffect, useState } from "react";
import { ViewProps } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "styled-components";

import { HexToHSL } from "../../helpers";

import { Container } from "./styles";

interface GradientContainerProps extends ViewProps {
  children?: ReactNode;
  color?: string;
  opacity?: number;
  backgroundColorGradientCount?: number;
}

export default function GradientContainer({
  children,
  color = "#806E42",
  opacity = 1,
  backgroundColorGradientCount = 3,
  ...props
}: GradientContainerProps) {
  const { COLORS, DIMENSIONS } = useTheme();

  console.log();

  return (
    <Container
      colors={[
        HexToHSL(color, DIMENSIONS.HSL_LIGHTNESS, opacity),
        ...`${COLORS.BACKGROUND} `
          .repeat(backgroundColorGradientCount - 1 > 0 ? backgroundColorGradientCount - 1 : 1)
          .trim()
          .split(" "),
      ]}
      {...props}
    >
      {children}
    </Container>
  );
}
