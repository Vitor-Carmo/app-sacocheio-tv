import styled from "styled-components/native";
import PlayListImage from "../../assets/image/playlist.jpeg";
export const Container = styled.View`
  flex: 1;
  padding: 30px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  padding-bottom: 10px;
  margin-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
`;

export const Playlist = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  source: PlayListImage,
})`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  width: 120px;
  height: 120px;
  margin-right: 10px;
`;

export const Content = styled.View`
  flex: 1;
`;
