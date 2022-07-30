import styled from "styled-components/native";

interface IContainerProps {
  show?: boolean;
}
export const Container = styled.View<IContainerProps>`
  display: ${({ show }) => (!show ? "none" : "flex")};
  padding: 30px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.BORDER};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const HeadContent = styled.View`
  width: 75%;
`;

export const Podcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{ lastEpisode: boolean }>`
  flex-direction: row;
  margin-bottom: ${({ lastEpisode }) => (lastEpisode ? "0px" : "15px")};
  padding-bottom: ${({ lastEpisode }) => (lastEpisode ? "0px" : "15px")};
  border-bottom-width: ${({ lastEpisode }) => (lastEpisode ? "0px" : "1px")};
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;
export const PodcastContent = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px 0;
`;

export const PodcastImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;
