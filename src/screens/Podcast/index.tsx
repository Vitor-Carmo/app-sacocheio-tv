import React, { useState } from "react";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Pause, Play, Download, Heart, Share } from "../../components";
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
  CommentContainer,
  Group,
  MyAvatar,
  Comment,
} from "./styles";

export default function Podcast() {
  const { COLORS } = useTheme();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const onPressPlayButton = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };
  return (
    <Container>
      <KeyboardAvoidingView behavior="height">
        <Group>
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
                  <Share size={18} />
                </Option>
                <Option>
                  <Heart size={24} />
                </Option>
                <Option>
                  <Download size={21} isDownloaded={isDownloaded} />
                </Option>
              </Options>
              <TouchableOpacity onPress={onPressPlayButton}>
                {isPlaying ? (
                  <Pause size={50} backgroundColor={COLORS.PRIMARY} />
                ) : (
                  <Play size={50} backgroundColor={COLORS.PRIMARY} />
                )}
              </TouchableOpacity>
            </PodcastActions>
            <Subtitle fontSize="12px">
              O programa é para ouvintes que não procuram cultura, informação ou
              opiniões inteligentes. Durante uma hora e meia Arthur Petry reduz
              o mundo inteiro ao seu ...
            </Subtitle>
          </Head>
        </Group>

        <Comments>
          <Group>
            <CommentHeader>
              <Title fontSize="16px">Comentários</Title>
            </CommentHeader>
          </Group>
          <CommentContainer>
            <MyAvatar
              color="#56CCF2"
              source={{
                uri: "https://sacocheio.tv/img.png",
              }}
            />
            <Comment
              placeholder="Faça seu comentário medíocre"
              placeholderTextColor={COLORS.TEXT_40}
            />
          </CommentContainer>
        </Comments>
      </KeyboardAvoidingView>
    </Container>
  );
}
