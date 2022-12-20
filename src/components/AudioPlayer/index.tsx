import React, { useState, useRef, useEffect } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { Modalize } from "react-native-modalize";
import { Audio } from "expo-av";

import {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  Easing,
} from "react-native-reanimated";

import api from "../../services/api";
import store, {
  RootState,
  useTypedSelector,
  useTypedDispatch,
} from "../../store";
import { playPodcast } from "../../store/fetch";
import { likeEpisode } from "../../helpers";

import Arrow from "../Arrow";
import Heart from "../Heart";
import Play from "../Play";
import Pause from "../Pause";
import Options from "../Options";
import Repeat from "../Repeat";
import CachedSvgUri from "../CachedSvgUri";

import {
  Container,
  TimeLine,
  Line,
  Content,
  TouchableAction,
  TouchablePodcast,
  Title,
  PlayerHead,
  PlayerHeadButtons,
  PlayerControls,
  PodcastName,
  Presenters,
  AudioSlider,
  TimeContainer,
  PlayerTime,
  Player,
  PlayContainer,
  Speed,
  SpeedContainer,
  RepeatContainer,
  Avatar,
} from "./styles";

import { podcastIcon } from "../../helpers";

export default function AudioPlayer() {
  const dispatch = useTypedDispatch();

  const modalizeContainerRef = useRef<Modalize>(null);

  const { COLORS } = useTheme();

  const { height } = Dimensions.get("screen");

  const podcast = useTypedSelector<IPodcast | null>(
    (state: RootState) => state.podcast.podcast
  );

  const playbackInstance = useTypedSelector<Audio.Sound | null>(
    (state: RootState) => state.podcast.playbackInstance
  );

  const playbackState = useTypedSelector(
    (state: RootState) => state.podcast.playbackState
  );

  const [isLiked, setIsLiked] = useState<boolean>(
    !!podcast?.episode.isFavorite
  );

  const handlePressLike = (): void => {
    likeEpisode(podcast?.episode?.id ?? 0, podcast?.id ?? 0, setIsLiked);
  };

  const handleOpenPodcastControl = (): void => {
    modalizeContainerRef.current?.open();
  };

  const handleClosePodcastControl = (): void => {
    modalizeContainerRef.current?.close();
  };

  async function handlePressPlay() {
    if (!podcast) return;

    dispatch(playPodcast(podcast));
  }

  function msToTime(duration: number) {
    let seconds: string | number = Math.floor((duration / 1000) % 60);
    let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);
    let hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours !== "00" ? hours + ":" : ""}${minutes}:${seconds}`;
  }

  const audioPlayerPosition = useSharedValue(-5);

  const playerContainerStyle = useAnimatedStyle(() => {
    return {
      bottom: audioPlayerPosition.value,
    };
  });

  useEffect(() => {
    let interval: string | number | NodeJS.Timer | undefined;

    if (podcast) {
      const updateSaveTime = async () => {
        const {
          podcast: {
            playbackState: { playbackInstancePosition },
          },
        } = store.getState();

        await api.post("/podcast/set_time", {
          episodeId: podcast.episode.id,
          time: playbackInstancePosition,
        });
      };

      interval = setInterval(updateSaveTime, 15000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [podcast]);

  useEffect(() => {
    if (playbackInstance === null) {
      audioPlayerPosition.value = withTiming(-5, {
        duration: 280,
        easing: Easing.ease,
      });
    } else {
      audioPlayerPosition.value = withTiming(105, {
        duration: 280,
        easing: Easing.ease,
      });
    }
  }, [playbackInstance]);

  return (
    <>
      <Container style={playerContainerStyle}>
        <TimeLine>
          <Line
            progress={
              (playbackState.playbackInstancePosition /
                playbackState.playbackInstanceDuration) *
              100
            }
          />
        </TimeLine>
        <Content>
          <TouchableAction onPress={handlePressLike}>
            <Heart size={22} isLiked={isLiked} />
          </TouchableAction>

          <TouchablePodcast onPress={handleOpenPodcastControl}>
            <Title speed={0.1} marqueeOnStart={true} loop={true} delay={1000}>
              {podcast?.episode.title}
            </Title>
          </TouchablePodcast>
          <TouchableAction onPress={handlePressPlay}>
            {!playbackState.isPlaying ? (
              <Play outline backgroundColor="#9E9E9E" size={22} />
            ) : (
              <Pause outline backgroundColor="#9E9E9E" size={22} />
            )}
          </TouchableAction>
        </Content>
      </Container>

      <Modalize
        ref={modalizeContainerRef}
        modalStyle={{
          backgroundColor: COLORS.BACKGROUND,
          minHeight: height,
        }}
        handleStyle={{
          backgroundColor: COLORS.BACKGROUND,
        }}
      >
        <PlayerHead>
          <PlayerHeadButtons onPress={handleClosePodcastControl}>
            <Arrow />
          </PlayerHeadButtons>
          <PlayerHeadButtons>
            <Options type="horizontal" borderColor="#fff" size={19} />
          </PlayerHeadButtons>
        </PlayerHead>

        <Avatar>
          <CachedSvgUri
            width="100%"
            height="100%"
            uri={podcastIcon(podcast?.id ?? 0)}
          />
        </Avatar>

        <PlayerControls>
          <PodcastName
            speed={0.1}
            marqueeOnStart={true}
            loop={true}
            delay={2000}
          >
            {podcast?.episode.title}
          </PodcastName>
          <Presenters
            speed={0.5}
            marqueeOnStart={true}
            loop={true}
            delay={2000}
          >
            {podcast?.apresentador}
          </Presenters>
          <AudioSlider
            minimumValue={0}
            maximumValue={playbackState.playbackInstanceDuration}
            minimumTrackTintColor={COLORS.PRIMARY}
            maximumTrackTintColor={COLORS.TEXT_40}
            thumbTintColor={COLORS.PRIMARY}
            value={playbackState.playbackInstancePosition}
            onSlidingComplete={(number) => {
              playbackInstance?.setPositionAsync(number);
            }}
          />
          <TimeContainer>
            <PlayerTime>
              {msToTime(playbackState.playbackInstancePosition)}
            </PlayerTime>
            <PlayerTime>
              {msToTime(playbackState.playbackInstanceDuration)}
            </PlayerTime>
          </TimeContainer>

          <Player>
            <SpeedContainer
              onPress={async () => {
                const rate =
                  playbackState.rate !== 2 ? playbackState.rate + 0.25 : 1;

                playbackInstance?.setRateAsync(rate, true);
                playbackInstance?.setProgressUpdateIntervalAsync(1000 / rate);
              }}
            >
              <Speed>{playbackState.rate}x</Speed>
            </SpeedContainer>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                playbackInstance?.setPositionAsync(
                  playbackState.playbackInstancePosition - 15000
                )
              }
            >
              <Arrow type="player" size={23} />
            </TouchableOpacity>
            <PlayContainer onPress={handlePressPlay}>
              {!playbackState.isPlaying ? (
                <Play size={78} backgroundColor={COLORS.PRIMARY} />
              ) : (
                <Pause size={78} backgroundColor={COLORS.PRIMARY} />
              )}
            </PlayContainer>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                playbackInstance?.setPositionAsync(
                  playbackState.playbackInstancePosition + 15000
                )
              }
            >
              <Arrow type="player" size={23} direction="right" />
            </TouchableOpacity>
            <RepeatContainer
              onPress={() =>
                playbackInstance?.setIsLoopingAsync(!playbackState.isLooping)
              }
            >
              <Repeat
                size={24}
                color={
                  playbackState.isLooping ? COLORS.PRIMARY : COLORS.TEXT_60
                }
              />
            </RepeatContainer>
          </Player>
        </PlayerControls>
      </Modalize>
    </>
  );
}
