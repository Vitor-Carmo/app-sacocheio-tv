import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Title } from "../../styles/global";
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

import Play from "../Play";
import Pause from "../Pause";
import Download from "../Download";
import Heart from "../Heart";
import Share from "../Share";
import OptionsIcon from "../Options";

export type PodcastProps = {
  isLastPodcast?: boolean;
};

export default function Podcast({ isLastPodcast }: PodcastProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPodcastLiked, setIsPodcastLiked] = useState(false);

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const handlePressPlayButton = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const handleOnLikePodcast = () => {
    setIsPodcastLiked((isPodcastLiked) => !isPodcastLiked);
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
        <Title fontSize="16px" color={isPlaying ? COLORS.PRIMARY : null}>
          #152 - Licença Obesidade
        </Title>
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
          <Option onPress={handleOnLikePodcast}>
            <Heart isLiked={isPodcastLiked} />
          </Option>
          <Option>
            <Download />
          </Option>
          <Option>
            <Share />
          </Option>
          <Option>
            <OptionsIcon />
          </Option>
        </Options>

        <PlayButton onPress={handlePressPlayButton}>
          {isPlaying ? <Pause /> : <Play />}
        </PlayButton>
      </OptionsContainer>
    </Container>
  );
}
