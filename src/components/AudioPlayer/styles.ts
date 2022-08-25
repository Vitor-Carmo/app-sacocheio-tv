import styled from "styled-components/native";

import { AUDIO_PLAYER_HEIGHT } from "../../constants";

export const Container = styled.View`
  position: absolute;
  bottom: 105px;

  width: 100%;
  height: ${AUDIO_PLAYER_HEIGHT}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const TimeLine = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const Line = styled.View<{ progress?: number }>`
  width: ${({ progress }) => progress ?? 0}%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const TouchableAction = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 100%;
  justify-content: center;
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
`;
export const TouchablePodcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  flex: 1;
  justify-content: center;
  height: 100%;
  padding: 0 15px;
`;
export const Title = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_50};
  text-align: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL}; */
  height: 100%;
`;
