import React, { useState, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";

import {
  Pause,
  Play,
  Download,
  Heart,
  Share,
  Close,
  Header,
  GradientContainer,
} from "../../components";
import { Title, Subtitle } from "../../styles/global";
import { useScrollAnimated } from "../../hooks";

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
  ProfileAvatar,
  CommentInput,
  Comment,
  CommentContent,
  Answers,
  AnswerHeader,
} from "./styles";
import { HexToHSL } from "../../helpers";

export default function Podcast() {
  const { COLORS, DIMENSIONS } = useTheme();
  const { scrollHandler, scrollY } = useScrollAnimated();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const answersModalizeRef = useRef<Modalize>(null);

  const comments = [{}, {}, {}, {}, {}, {}, {}];
  const answers = [{}, {}, {}, {}];

  const onPressPlayButton = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const onPressLikeButton = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  const onPressAnswers = () => {
    answersModalizeRef.current?.open();
  };

  const onPressClose = () => {
    answersModalizeRef.current?.close();
  };

  return (
    <>
      <Header
        title="#144 - Hitler era um cancelador"
        scrollY={scrollY}
        backgroundColor={HexToHSL("#9B9F46", DIMENSIONS.HSL_LIGHTNESS, 0.9)}
      />

      <Container onScroll={scrollHandler} scrollEventThrottle={16}>
        <GradientContainer color="#9B9F46">
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
                  <Option onPress={onPressLikeButton}>
                    <Heart size={24} isLiked={isLiked} />
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
                O programa é para ouvintes que não procuram cultura, informação
                ou opiniões inteligentes. Durante uma hora e meia Arthur Petry
                reduz o mundo inteiro ao seu ...
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
              <ProfileAvatar size={50} color="#56CCF2" />
              <CommentInput
                placeholder="Faça seu comentário medíocre"
                placeholderTextColor={COLORS.TEXT_40}
              />
            </CommentContainer>
            {comments.map((comment, index) => (
              <Comment
                key={index}
                paddingLeft="20px"
                isLastComment={comments.length - 1 === index}
              >
                <ProfileAvatar size={40} color="#FF3D3D" />
                <CommentContent>
                  <Title fontSize="14px" marginBottom="5px">
                    Miguel Arcanjo • 03 jan 2021
                  </Title>

                  <Subtitle fontSize="12px" marginTop="0px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras arcu ex, luctus placerat odio non, varius molestie
                    erat. Integer porta vitae nisl vel varius. Phasellus
                    tincidunt est nec congue gravida. Cras pharetra lorem eu
                    porta vehicula. congue gravida. Cras
                  </Subtitle>

                  <TouchableOpacity onPress={onPressAnswers}>
                    <Answers>23 RESPOSTAS</Answers>
                  </TouchableOpacity>
                </CommentContent>
              </Comment>
            ))}
          </Comments>
        </GradientContainer>
      </Container>

      <Modalize
        ref={answersModalizeRef}
        keyboardAvoidingBehavior="height"
        modalStyle={{
          backgroundColor: COLORS.BACKGROUND,
        }}
        handleStyle={{
          backgroundColor: COLORS.BACKGROUND,
        }}
      >
        <Comments>
          <AnswerHeader>
            <Title fontSize="18px">Respostas</Title>
            <TouchableOpacity onPress={onPressClose}>
              <Close />
            </TouchableOpacity>
          </AnswerHeader>
          <Comment>
            <ProfileAvatar size={40} color="#FF3D3D" />
            <CommentContent>
              <Title fontSize="14px" marginBottom="5px">
                Miguel Arcanjo • 03 jan 2021
              </Title>

              <Subtitle fontSize="12px" marginTop="0px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                arcu ex, luctus placerat odio non, varius molestie erat. Integer
                porta vitae nisl vel varius. Phasellus tincidunt est nec congue
                gravida. Cras pharetra lorem eu porta vehicula. congue gravida.
                Cras
              </Subtitle>
            </CommentContent>
          </Comment>

          <CommentContainer>
            <ProfileAvatar size={40} color="#56CCF2" />
            <CommentInput
              placeholder="Responda esse comentário medíocre"
              placeholderTextColor={COLORS.TEXT_40}
            />
          </CommentContainer>
          {answers.map((answer, index) => (
            <Comment
              key={index}
              paddingLeft="20px"
              isLastComment={answers.length - 1 === index}
            >
              <ProfileAvatar size={30} color="#FF3D3D" />
              <CommentContent>
                <Title fontSize="12px" marginBottom="5px">
                  Miguel Arcanjo • 03 jan 2021
                </Title>

                <Subtitle fontSize="10px" marginTop="0px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  arcu ex, luctus placerat odio non, varius molestie erat.
                  Integer porta vitae nisl vel varius. Phasellus tincidunt est
                  nec congue gravida. Cras pharetra lorem eu porta vehicula.
                  congue gravida. Cras
                </Subtitle>
              </CommentContent>
            </Comment>
          ))}
        </Comments>
      </Modalize>
    </>
  );
}
