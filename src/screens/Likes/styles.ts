import { FlatList } from "react-native";
import styled from "styled-components/native";

export const PodcastList = styled.FlatList`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
`;
export const Container = styled.ScrollView`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
`;
