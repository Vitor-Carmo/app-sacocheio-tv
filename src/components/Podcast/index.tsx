import React, { useState } from "react";
import { Title } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  AvatarContainer,
  Avatar,
  Description,
  TimeContainer,
  Time,
  TimerContainer,
  TimerRange,
  OptionsContainer,
  Options,
  Option,
  PlayButton,
} from "./styles";

import SmallHeart from "../../assets/svg/small_heart.svg";
import Download from "../../assets/svg/download.svg";
import Share from "../../assets/svg/share.svg";
import OptionsSvg from "../../assets/svg/options.svg";
import PauseIcon from "../../assets/svg/small_pause.svg";
import Play from "../Play";
import Pause from "../Pause";

export type PodcastProps = {
  isLastPodcast?: boolean;
};

export default function Podcast({ isLastPodcast }: PodcastProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigation = useNavigation();
  const handlePressPlayButton = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePressPodcast = () => {
    navigation.navigate("Podcast");
  };

  return (
    <Container isLastPodcast={isLastPodcast} onPress={handlePressPodcast}>
      <AvatarContainer>
        <Avatar
          source={{
            uri: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
          }}
        />
        <Title fontSize="16px">#152 - Licença Obesidade </Title>
      </AvatarContainer>
      <Description numberOfLines={2}>
        Olá! Hoje eu falo sobre panelas da POLISHOP, finalmente ter ido bem
        abrindo o show do Padilha, médicos que fazem exame demissional, lidar
        com uma família
      </Description>
      <TimeContainer>
        <Time>57 min restantes</Time>
        <TimerContainer>
          <TimerRange width={30}></TimerRange>
        </TimerContainer>
      </TimeContainer>
      <OptionsContainer>
        <Options>
          <Option>
            <SmallHeart />
          </Option>
          <Option>
            <Download />
          </Option>
          <Option>
            <Share />
          </Option>
          <Option>
            <OptionsSvg />
          </Option>
        </Options>

        <PlayButton onPress={handlePressPlayButton}>
          {isPlaying ? <Pause /> : <Play />}
        </PlayButton>
      </OptionsContainer>
    </Container>
  );
}
