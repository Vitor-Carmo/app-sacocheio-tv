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
import Spinner from "../Spinner";
import CachedSvgUri from "../CachedSvgUri";
import { podcastIcon, likeEpisode } from "../../helpers";
import api from "../../services/api";
import cachingRequest from "../../services/cache";

export interface PodcastProps extends IEpisode {
  podcastId: number;
  podcastUrl: string;
  isLastPodcast?: boolean;
}

export default function Podcast({
  podcastId,
  id,
  titulo,
  podcastUrl,
  data,
  descricao,
  slug,
  thumbnail,
  isFavorite,
  podcastName,
  isLastPodcast,
}: PodcastProps) {
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPodcastLiked, setIsPodcastLiked] = useState(isFavorite);

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const handlePressPlayButton = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const handleOnLikePodcast = async () => {
    setIsPodcastLiked((isPodcastLiked) => !isPodcastLiked);
    try {
      const result = await likeEpisode(id, podcastId);
      if (!result) {
        setIsPodcastLiked((isPodcastLiked) => !isPodcastLiked);
      }
    } catch (error) {
      console.log(error);
      setIsPodcastLiked((isPodcastLiked) => !isPodcastLiked);
    }
  };

  const handlePressPodcast = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await cachingRequest(slug, async () =>
        api.get<PodcastResponse>(`/podcast/episode/${podcastUrl}/${slug}`)
      );
      navigation.navigate("Programs", {
        screen: "Podcast",
        params: { podcast: data },
        initial: false,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      isLastPodcast={isLastPodcast}
      onPress={handlePressPodcast}
      disabled={loading}
    >
      <AvatarContainer>
        <Avatar>
          <CachedSvgUri uri={podcastIcon(podcastId)} width={60} height={60} />
        </Avatar>
        <Title
          flex={1}
          numberOfLines={2}
          fontSize="18px"
          color={isPlaying ? COLORS.PRIMARY : null}
        >
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
          {loading ? (
            <Spinner size={20} color="#9E9E9E" borderWidth={1.5} />
          ) : (
            <>{isPlaying ? <Pause /> : <Play />}</>
          )}
        </PlayButton>
      </OptionsContainer>
    </Container>
  );
}
