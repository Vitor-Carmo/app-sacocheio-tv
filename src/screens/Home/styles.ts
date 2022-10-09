import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  padding-top: 45px;
`;

export const TouchableOptions = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  align-items: center;
  width: 25px;
  height: 50%;
  padding-top: 10px;
  padding-right: 10px;
`;

export const OptionsContainerList = styled(Animated.View)`
  position: absolute;
  top: 85px;
  right: ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND};
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  transform-origin: right;
  z-index: 1;
`;

export const TouchableOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  height: 50px;
`;

export const OptionListText = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 18px;
  margin-left: 15px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const AnchorContainer = styled.View`
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
`;

export const LatestPodcastsContainer = styled.View`
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
`;
