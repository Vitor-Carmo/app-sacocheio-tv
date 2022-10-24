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
import CachedSvgUri from "../CachedSvgUri";
import { podcastIcon } from "../../helpers";

export interface PodcastProps extends IEpisode {
  podcastId: number;
  isLastPodcast?: boolean;
}

export default function Podcast({
  podcastId,
  id,
  titulo,
  data,
  descricao,
  slug,
  thumbnail,
  isFavorite,
  podcastName,
  isLastPodcast,
}: PodcastProps) {
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
        <Avatar>
          <CachedSvgUri uri={podcastIcon(podcastId)} width={60} height={60} />
        </Avatar>
        <Title flex={1} numberOfLines={2} fontSize="18px" color={isPlaying ? COLORS.PRIMARY : null}>
          {titulo}
        </Title>
      </AvatarContainer>
      <Description numberOfLines={2}>{descricao}</Description>
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
