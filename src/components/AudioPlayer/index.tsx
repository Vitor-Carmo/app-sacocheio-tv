import React, { useState, useRef, useEffect } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { Modalize } from "react-native-modalize";
import { Audio, AVPlaybackStatus } from "expo-av";

import Arrow from "../Arrow";
import Heart from "../Heart";
import Play from "../Play";
import Pause from "../Pause";
import Options from "../Options";
import Repeat from "../Repeat";

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
  Cover,
  PlayerControls,
  PodcastName,
  AudioSlider,
  TimeContainer,
  PlayerTime,
  Player,
  PlayContainer,
  Speed,
  SpeedContainer,
  RepeatContainer,
} from "./styles";

import { Subtitle } from "../../styles/global";

export default function AudioPlayer() {
  const playerRef = useRef<Modalize>(null);
  const { COLORS } = useTheme();
  const { height } = Dimensions.get("screen");

  const [playbackInstance, setPlaybackInstance] = useState<Audio.Sound | null>(
    null
  );

  const [playbackState, setPlaybackState] = useState({
    muted: false,
    playbackInstancePosition: 0,
    playbackInstanceDuration: 0,
    shouldPlay: false,
    isPlaying: false,
    isBuffering: false,
    isLoading: true,
    isLooping: false,
    shouldCorrectPitch: true,
    volume: 1,
    rate: 1,
    useNativeControls: false,
    throughEarpiece: false,
  });

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePressLike = (): void => {
    setIsLiked((isLiked) => !isLiked);
  };

  const handleOpenPodcastControl = (): void => {
    playerRef.current?.open();
  };

  const handleClosePodcastControl = (): void => {
    playerRef.current?.close();
  };

  async function handlePressPlay() {
    if (playbackInstance === null) return;

    if (playbackState.isPlaying) {
      playbackInstance.pauseAsync();
      return;
    }

    if (
      playbackState.playbackInstancePosition ===
      playbackState.playbackInstanceDuration
    ) {
      await playbackInstance?.setPositionAsync(0);
    }
    playbackInstance.playAsync();
  }

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setPlaybackState((oldState) => ({
        ...oldState,
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis ?? 0,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        isLooping: status.isLooping,
        shouldCorrectPitch: status.shouldCorrectPitch,
      }));
    }
  };

  const initiateAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: "https://portal.sacocheio.tv/rss/3962/38JyGE6eiG/763d1063c462a0dadede80a239525ac7.mp3",
      },
      {
        shouldPlay: false,
        progressUpdateIntervalMillis: 1000,
        rate: playbackState.rate,
        shouldCorrectPitch: playbackState.shouldCorrectPitch,
        volume: playbackState.volume,
        isMuted: playbackState.muted,
        isLooping: false,
      },
      onPlaybackStatusUpdate
    );

    setPlaybackInstance(sound);
  };

  function msToTime(duration: number) {
    let seconds: string | number = Math.floor((duration / 1000) % 60);
    let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);
    let hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours !== "00" ? hours + ":" : ""}${minutes}:${seconds}`;
  }

  useEffect(() => {
    initiateAudio();

    return () => {
      playbackInstance?.unloadAsync();
      setPlaybackInstance(null);
    };
  }, []);

  return (
    <>
      <Container>
        <TimeLine>
          <Line progress={50} />
        </TimeLine>
        <Content>
          <TouchableAction onPress={handlePressLike}>
            <Heart size={22} isLiked={isLiked} />
          </TouchableAction>
          <TouchablePodcast onPress={handleOpenPodcastControl}>
            <Title numberOfLines={1}>#152 - Licença Obesidade</Title>
          </TouchablePodcast>
          <TouchableAction onPress={handlePressPlay}>
            {!isPlaying ? (
              <Play outline backgroundColor="#9E9E9E" size={22} />
            ) : (
              <Pause outline backgroundColor="#9E9E9E" size={22} />
            )}
          </TouchableAction>
        </Content>
      </Container>

      <Modalize
        ref={playerRef}
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
        <Cover
          source={{
            uri: "www.google.com",
          }}
        />

        <PlayerControls>
          <PodcastName fontSize="16px" marginBottom="5px">
            #144 Hitler era um cancelador
          </PodcastName>
          <Subtitle fontSize="13px">Arthur Petry</Subtitle>
          <AudioSlider
            minimumValue={0}
            maximumValue={playbackState.playbackInstanceDuration}
            minimumTrackTintColor={COLORS.PRIMARY}
            maximumTrackTintColor={COLORS.TEXT_40}
            thumbTintColor={COLORS.PRIMARY}
            value={playbackState.playbackInstancePosition}
            onSlidingComplete={(number) =>
              playbackInstance?.setPositionAsync(number)
            }
            onValueChange={(number) => console.log(number)}
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
              onPress={() =>
                playbackInstance?.setRateAsync(
                  playbackState.rate !== 2 ? playbackState.rate + 0.25 : 1,
                  true
                )
              }
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
