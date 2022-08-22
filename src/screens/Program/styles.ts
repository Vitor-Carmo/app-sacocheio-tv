import styled from "styled-components/native";
import Animated from "react-native-reanimated";

import { HEADER_HEIGHT } from "../../constants";

export const Container = styled(Animated.ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const ProgramContainer = styled.View`
  padding: 0 ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  padding-top: ${HEADER_HEIGHT}px;
  margin-bottom: 30px;
`;

export const Head = styled.View`
  margin-top: 30px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const HeadContent = styled.View`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 15px;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const Description = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_70};
`;

export const FilterContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const FilterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 80px;
  height: 32px;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.FILTER_BUTTON_BACKGROUND};
`;

export const FilterButtonTitle = styled.Text`
  font-family: "Poppins_300Light";
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.FILTER_BUTTON_TITLE};
`;

export const PodcastListContent = styled.View`
  margin-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
`;
