import styled from "styled-components/native";
import Constants from "expo-constants";
import Animated from "react-native-reanimated";
import { HEADER_HEIGHT } from "../../constants";

export const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  flex-direction: row;
  align-items: center;

  margin-top: ${Constants.statusBarHeight}px;

  height: ${HEADER_HEIGHT}px;
  background-color: ${({ theme }) => theme.COLORS.STATUSBAR};
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
  padding-right: 30px;
  padding-left: ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  height: 100%;
  justify-content: center;
`;