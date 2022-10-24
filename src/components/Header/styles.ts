import styled from "styled-components/native";
import Constants from "expo-constants";
import Animated from "react-native-reanimated";
import { DIMENSIONS } from "../../constants";

export const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Constants.statusBarHeight}px;

  height: ${DIMENSIONS.HEADER_HEIGHT + Constants.statusBarHeight}px;
  z-index: 1;
`;

export const Title = styled(Animated.Text)`
  font-family: "Poppins_500Medium";
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  opacity: 1;
`;

export const GoBackOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const OptionsContainer = styled(Animated.View)`
  width: 60px;
  height: 100%;
`;

export const OpacityTouchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
