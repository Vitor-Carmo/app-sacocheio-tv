import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const PodcastList = styled(
  FlatList as new (
    props: FlatListProps<IEpisodeDownloaded>
  ) => FlatList<IEpisodeDownloaded>
)`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
`;
