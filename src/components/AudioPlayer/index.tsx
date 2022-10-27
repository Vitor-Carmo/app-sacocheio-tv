import React, { useState, useRef } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { Modalize } from "react-native-modalize";

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

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePressLike = (): void => {
    setIsLiked((isLiked) => !isLiked);
  };

  const handlePressPlay = (): void => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const handleOpenPodcastControl = (): void => {
    playerRef.current?.open();
  };

  const handleClosePodcastControl = (): void => {
    playerRef.current?.close();
  };

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
            maximumValue={1}
            minimumTrackTintColor={COLORS.PRIMARY}
            maximumTrackTintColor={COLORS.TEXT_40}
            thumbTintColor={COLORS.PRIMARY}
          />
          <TimeContainer>
            <PlayerTime>01:06</PlayerTime>
            <PlayerTime>03:16</PlayerTime>
          </TimeContainer>

          <Player>
            <SpeedContainer>
              <Speed>1x</Speed>
            </SpeedContainer>
            <TouchableOpacity activeOpacity={0.6}>
              <Arrow type="player" size={23} />
            </TouchableOpacity>
            <PlayContainer onPress={handlePressPlay}>
              {!isPlaying ? (
                <Play size={78} backgroundColor={COLORS.PRIMARY} />
              ) : (
                <Pause size={78} backgroundColor={COLORS.PRIMARY} />
              )}
            </PlayContainer>
            <TouchableOpacity activeOpacity={0.6}>
              <Arrow type="player" size={23} direction="right" />
            </TouchableOpacity>
            <RepeatContainer>
              <Repeat color={COLORS.TEXT_60} />
            </RepeatContainer>
          </Player>
        </PlayerControls>
      </Modalize>
    </>
  );
}
