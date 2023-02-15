import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { Title as CommonTitle } from "../../styles/global";

type IContainerProps = {
  isLastPodcast?: boolean;
};

type IDisabledProp = {
  disabled?: boolean;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: relative;
  flex: 1;
`;

export const PodcastContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<IContainerProps>`
  position: relative;
  padding: 15px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  border-bottom-width: ${({ isLastPodcast }) =>
    isLastPodcast ? "0px" : "1px"};
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const DownloadContainer = styled(Animated.View)<{ progress: number }>`
  position: absolute;
  width: ${({ progress }) => `${progress * 100}%`};
  height: 100%;
  opacity: 0.05;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const AvatarContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.View<IDisabledProp>`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.COLORS.TOAST_BACKGROUND};
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
`;
export const Title = styled(CommonTitle)<IDisabledProp>`
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
`;

export const Description = styled.Text<IDisabledProp>`
  font-family: "Poppins_400Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_80};
  margin-bottom: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
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
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 10px 0;
`;
