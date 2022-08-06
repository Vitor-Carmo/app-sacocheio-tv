import styled from "styled-components/native";

type IContainerProps = {
  isLastPodcast?: boolean;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<IContainerProps>`
  padding: 15px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  border-bottom-width: ${({ isLastPodcast }) =>
    isLastPodcast ? "0px" : "1px"};
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const AvatarContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const Description = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_80};
  margin-bottom: 10px;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_30};
  margin-right: 8px;
`;

export const TimerContainer = styled.View`
  width: 100px;
  height: 6px;
  background-color: ${({ theme }) => theme.COLORS.TIMER_BACKGROUND};
  border-radius: 6px;
`;

export const TimerRange = styled.View<{ width: number }>`
  flex: 1;
  width: ${({ width }) => `${width}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: -7.5px;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 10px 7.5px;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 10px 15px;
`;
