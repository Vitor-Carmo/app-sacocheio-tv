import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Head = styled.View`
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  padding-top: 45px;
`;

export const AnchorContainer = styled.View`
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
`;


export const LatestPodcastsContainer = styled.View`
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
`