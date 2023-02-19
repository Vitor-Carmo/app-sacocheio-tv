import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Animated from "react-native-reanimated";

export const Container = styled(Animated.View)<{ color: string }>`
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100%;
  background-color: ${({ color }) => color};
  margin-top: ${StatusBar.currentHeight}px;
  z-index: 1;
`;
