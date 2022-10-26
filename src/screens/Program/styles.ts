import styled from "styled-components/native";
import Animated from "react-native-reanimated";

import { DIMENSIONS } from "../../constants";
import { SeeMore } from "../../components";

export const Container = styled(Animated.ScrollView)`
  flex: 1;
`;

export const ProgramContainer = styled.View`
  padding: 0 ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  padding-top: ${DIMENSIONS.HEADER_HEIGHT}px;
  margin-bottom: 30px;
`;

export const Head = styled.View`
  margin-top: 30px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const HeadContent = styled(Animated.View)`
  flex: 1;
`;

export const Avatar = styled(Animated.View)`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.COLORS.SHIMMER_DEFAULT_COLOR};
  overflow: hidden;
`;

export const Description = styled(SeeMore).attrs({ numberOfLines: 3 })`
  font-family: "Poppins_400Regular";
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT_70};
`;

export const FilterContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
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

export const PodcastContainer = styled.View`
  flex: 1;
`;

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 0px 15px;
`;
