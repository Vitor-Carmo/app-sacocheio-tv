import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Slider from "@react-native-community/slider";
import Animated from "react-native-reanimated";
import MarqueeText from "react-native-marquee";

import { DIMENSIONS } from "../../constants";

const { width } = Dimensions.get("window");

export const Container = styled(Animated.View)`
  position: absolute;
  bottom: 105px;

  width: 100%;
  height: ${DIMENSIONS.AUDIO_PLAYER_HEIGHT}px;
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
  align-items: center;
  height: 100%;
  padding: 0 0px;
`;
export const Title = styled(MarqueeText)`
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

export const PlayerHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 50px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  padding-bottom: 30px;
`;

export const PlayerHeadButtons = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.TEXT_20};
`;

// 64 x 75
export const Cover = styled.Image`
  align-self: center;
  width: ${width * 0.75}px;
  height: ${width * 0.75}px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const Avatar = styled.View`
  width: ${width * 0.75}px;
  height: ${width * 0.75}px;
  align-self: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  overflow: hidden;
`;

export const PlayerControls = styled.View`
  margin: 0 auto;
  margin-top: 35px;
  width: 100%;
  max-width: ${width * 0.65}px;
  align-items: center;
`;

export const PodcastName = styled(MarqueeText)`
  font-family: "Poppins_600SemiBold";
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 10px;
`;

export const Presenters = styled(MarqueeText)`
  font-family: "Poppins_600SemiBold";
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.TEXT_50};
`;

export const AudioSlider = styled(Slider)`
  width: 105%;
  height: 40px;
  margin-top: 20px;
`;

export const TimeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 5px;
`;

export const PlayerTime = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_60};
`;

export const Player = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin: 0 20px;
`;

export const SpeedContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-right: 20px;
  width: 60px;
  align-items: center;
`;

export const Speed = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT_60};
`;

export const RepeatContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  margin-left: 20px;
  width: 60px;
`;
