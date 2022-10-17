import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Head = styled.View`
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  margin-top: 45px;
  margin-bottom: 30px;
`;

export const Content = styled.View`
  margin-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
`;

export const Podcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{ isItTheLatestPodcastItem: boolean }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  padding-bottom: 15px;
  margin-bottom: 15px;
  ${({ isItTheLatestPodcastItem }) =>
    isItTheLatestPodcastItem &&
    `
    border-bottom-width: 0px;
    padding-bottom: 0px;
    margin-bottom: 15px;
  `}
`;

export const PodcastContainer = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  overflow: hidden;
`;

export const PodcastContent = styled.View`
  flex: 1;
`;
