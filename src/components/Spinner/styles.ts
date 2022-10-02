import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const SpinnerView = styled(Animated.View)<{
  size: number;
  color: string;
  borderWidth: number;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  /* border-right-color: ${({ color }) => color}; */
  border-radius: ${({ size }) => `${size / 2}px`};
  border-left-color: ${({ color }) => color};
  border-left-width: ${({ borderWidth }) => `${borderWidth}px`};
  border-bottom-color: ${({ color }) => color};
  border-bottom-width: ${({ borderWidth }) => `${borderWidth}px`};
  border-right-color: ${({ color }) => color};
  border-right-width: ${({ borderWidth }) => `${borderWidth}px`};
  border-top-color: transparent;
  border-top-width: ${({ borderWidth }) => `${borderWidth}px`};
`;
