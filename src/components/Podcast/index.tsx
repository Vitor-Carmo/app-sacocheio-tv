import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Title } from "../../styles/global";
import {
  Container,
  AvatarContainer,
  Avatar,
  Description,
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
import { podcastIcon, likeEpisode, sharePodcast } from "../../helpers";
import api from "../../services/api";
import cachingRequest from "../../services/cache";
import { playPodcast } from "../../store/fetch";
import { RootState, useTypedSelector, useTypedDispatch } from "../../store";
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
  const playbackInstance = useTypedSelector(
    (state: RootState) => state.podcast.playbackInstance
  );
  const playbackState = useTypedSelector(
    (state: RootState) => state.podcast.playbackState
  );
  const currentPodcast = useTypedSelector(
    (state: RootState) => state.podcast.podcast
  );
  const [loading, setLoading] = useState(false);
  const [isPodcastLiked, setIsPodcastLiked] = useState(isFavorite);
  const dispatch = useTypedDispatch();
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const handleOnLikePodcast = () => {
    likeEpisode(id, podcastId, setIsPodcastLiked);
  };

  const handlePressPodcast = async () => {
    const navigate = (podcast: IPodcast) =>
      navigation.navigate("Programs", {
        screen: "Podcast",
        params: { podcast: { ...podcast, podcastUrl, podcastName, slug } },
        initial: false,
      });

    if (currentPodcast?.episode?.id === id) {
      navigate(currentPodcast);
      return;
    }

    setLoading(true);

    try {
      const {
        data: { data },
      } = await cachingRequest(slug, async () =>
        api.get<PodcastResponse>(
          `/podcast/episode/${podcastUrl ?? podcastName}/${slug}`
        )
      );
      navigate(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayPodcast = async () => {
    const play = (podcast: IPodcast) => dispatch(playPodcast(podcast));

    if (currentPodcast?.episode?.id === id) {
      play(currentPodcast);
      return;
    }

    setLoading(true);
    try {
      if (playbackState.isPlaying) {
        await playbackInstance?.pauseAsync();
      }

      const {
        data: { data },
      } = await cachingRequest(slug, async () =>
        api.get<PodcastResponse>(
          `/podcast/episode/${podcastUrl ?? podcastName}/${slug}`
        )
      );
      play(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    sharePodcast(titulo, podcastUrl, slug);
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
          color={currentPodcast?.episode?.id === id ? COLORS.PRIMARY : null}
        >
          {titulo}
        </Title>
      </AvatarContainer>
      <Description numberOfLines={2}>{descricao}</Description>
      <OptionsContainer>
        <Options>
          <Option onPress={handleOnLikePodcast}>
            <Heart isLiked={isPodcastLiked} />
          </Option>
          <Option>
            <Download />
          </Option>
          <Option onPress={handleShare}>
            <Share />
          </Option>
          <Option>
            <OptionsIcon />
          </Option>
        </Options>

        <PlayButton onPress={handlePlayPodcast}>
          {loading ? (
            <Spinner size={20} color="#9E9E9E" borderWidth={1.5} />
          ) : (
            <>
              {currentPodcast?.episode?.id === id && playbackState.isPlaying ? (
                <Pause />
              ) : (
                <Play />
              )}
            </>
          )}
        </PlayButton>
      </OptionsContainer>
    </Container>
  );
}
