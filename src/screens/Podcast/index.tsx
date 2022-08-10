import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Pause, Play } from "../../components";
import { Title, Subtitle } from "../../styles/global";

import {
  Container,
  Head,
  Avatar,
  InfoText,
  PodcastActions,
  Options,
  Option,
  Comments,
  CommentHeader,
} from "./styles";

import Download from "../../assets/svg/download.svg";
import SmallHeart from "../../assets/svg/small_heart.svg";
import Share from "../../assets/svg/share.svg";

export default function Podcast() {
  const { COLORS } = useTheme();

  const [isPlaying, setIsPlaying] = useState(false);
  const onPressPlayButton = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };
  return (
    <Container>
      <Head>
        <Avatar
          source={{
            uri: "https://sacocheio.tv/img.png",
          }}
        />
        <Title fontSize="28px" marginBottom="10px">
          #144 - Hitler era um cancelador
        </Title>
        <Subtitle fontSize="12px" marginTop="0px" marginBottom="10px">
          <InfoText>Podcast Saco Cheio</InfoText> por{" "}
          <InfoText>Arthur Petry</InfoText>
        </Subtitle>
        <Subtitle>1 hr 20 min</Subtitle>

        <PodcastActions>
          <Options>
            <Option>
              <Share width={18} height={21} />
            </Option>
            <Option>
              <SmallHeart width={24} height={21} />
            </Option>
            <Option>
              <Download width={21} height={21} />
            </Option>
          </Options>
          <TouchableOpacity onPress={onPressPlayButton}>
            {isPlaying ? (
              <Pause width={50} height={50} backgroundColor={COLORS.PRIMARY} />
            ) : (
              <Play width={50} height={50} backgroundColor={COLORS.PRIMARY} />
            )}
          </TouchableOpacity>
        </PodcastActions>
        <Subtitle fontSize="12px">
          O programa é para ouvintes que não procuram cultura, informação ou
          opiniões inteligentes. Durante uma hora e meia Arthur Petry reduz o
          mundo inteiro ao seu ...
        </Subtitle>
      </Head>
      <Comments>
        <CommentHeader>
          <Title fontSize="16px">Comentários</Title>
        </CommentHeader>
      </Comments>
    </Container>
  );
}
