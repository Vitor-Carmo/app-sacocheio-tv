import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
  withSequence,
  cancelAnimation,
} from "react-native-reanimated";

import { Title, Subtitle } from "../../styles/global";
import {
  Container,
  PodcastContainer,
  AvatarContainer,
  Avatar,
  Description,
  OptionsContainer,
  Options,
  Option,
  PlayButton,
  DownloadContainer,
} from "./styles";

import Play from "../Play";
import Pause from "../Pause";
import Download from "../Download";
import Heart from "../Heart";
import Share from "../Share";
import Spinner from "../Spinner";
import CachedSvgUri from "../CachedSvgUri";
import {
  podcastIcon,
  likeEpisode,
  sharePodcast,
  downloadPodcast,
} from "../../helpers";
import api from "../../services/api";
import cachingRequest from "../../services/cache";
import { playPodcast } from "../../store/fetch";
import { RootState, useTypedSelector, useTypedDispatch } from "../../store";
import { ASYNC_STORAGE_KEYS, ERROS } from "../../constants";


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
  const podcastDownloadResumableProgress = useTypedSelector(
    (state: RootState) => state.podcast.podcastDownloadResumableProgress
  ) as FileSystem.DownloadProgressData | null;

  const episodeIdThatIsDownloading = useTypedSelector(
    (state: RootState) => state.podcast.episodeIdThatIsDownloading
  );

  const [loading, setLoading] = useState(false);
  const [isPodcastLiked, setIsPodcastLiked] = useState(isFavorite);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const dispatch = useTypedDispatch();
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const downloadContainerOpacity = useSharedValue(0.02);
  const downloadContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: downloadContainerOpacity.value,
    };
  });

  const handleOnLikePodcast = () => {
    likeEpisode(id, podcastId, setIsPodcastLiked);
  };

  const handlePressPodcast = async () => {
    const navigate = (podcast: IPodcast) =>
      navigation.navigate("Programs", {
        screen: "Podcast",
        params: {
          podcast: { ...podcast, podcastUrl, podcastName, slug, isFavorite },
        },
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

  const getPodcast = async () => {
    const {
      data: { data },
    } = await cachingRequest(slug, async () =>
      api.get<PodcastResponse>(
        `/podcast/episode/${podcastUrl ?? podcastName}/${slug}`
      )
    );

    return data as IPodcast;
  };

  const handleDownload = async () => {
    const podcast = await getPodcast();
    if (!podcast) {
      return;
    }
    try {
      console.log("downloading ...");
      await downloadPodcast({
        ...podcast.episode,
        podcastUrl,
        podcastName,
        slug,
      });
      console.log("downloaded ...");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: ERROS.UNKNOWN_DOWNLOAD_PODCAST_ERROR,
      });
      console.error(error);
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

      const podcast = await getPodcast();
      play(podcast);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    sharePodcast(titulo, podcastUrl ?? podcastName, slug);
  };

  useEffect(() => {
    const checkIfIsDownloaded = async () => {
      const storagePodcasts = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS
      );

      const downloadedPodcasts = JSON.parse(
        storagePodcasts ?? "[]"
      ) as IEpisodeDownloaded[];

      setIsDownloaded(
        !!downloadedPodcasts.find((podcast) => podcast.id === id)
      );
    };

    checkIfIsDownloaded();
  }, [episodeIdThatIsDownloading]);

  useEffect(() => {
    if (episodeIdThatIsDownloading === id) {
      downloadContainerOpacity.value = withRepeat(
        withSequence(
          withTiming(0.08, {
            duration: 800,
            easing: Easing.linear,
          }),
          withTiming(0.02, {
            duration: 800,
            easing: Easing.linear,
          })
        ),
        -1
      );
    } else {
      cancelAnimation(downloadContainerOpacity);
    }
  }, [episodeIdThatIsDownloading]);
  return (
    <Container>
      <DownloadContainer
        style={downloadContainerStyle}
        progress={
          episodeIdThatIsDownloading === id && podcastDownloadResumableProgress
            ? podcastDownloadResumableProgress.totalBytesWritten /
              podcastDownloadResumableProgress.totalBytesExpectedToWrite
            : 0
        }
      />

      <PodcastContainer
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
            <Option
              onPress={handleDownload}
              disabled={episodeIdThatIsDownloading === id}
            >
              <Download isDownloaded={isDownloaded} />
            </Option>
            <Option onPress={handleShare}>
              <Share />
            </Option>
            {/* <Option>
            <OptionsIcon />
          </Option> */}
          </Options>

          <PlayButton onPress={handlePlayPodcast}>
            {loading ? (
              <Spinner size={20} color="#9E9E9E" borderWidth={1.5} />
            ) : (
              <>
                {currentPodcast?.episode?.id === id &&
                playbackState.isPlaying ? (
                  <Pause />
                ) : (
                  <Play />
                )}
              </>
            )}
          </PlayButton>
        </OptionsContainer>
      </PodcastContainer>
    </Container>
  );
}
