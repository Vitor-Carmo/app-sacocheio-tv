import React, { useState, useRef, useMemo } from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";
import { useRoute, RouteProp } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { RootState, useTypedSelector } from "../../store";
import {
  Pause,
  Play,
  Download,
  Heart,
  Share,
  Close,
  Header,
  GradientContainer,
  CachedSvgUri,
  Spinner,
  Comment,
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
  AnswerHeader,
} from "./styles";
import {
  HexToHSL,
  podcastColor,
  podcastIcon,
  formateDate,
  getRadomColor,
} from "../../helpers";

import api from "../../services/api";

import { ERROS } from "../../constants";

export default function Podcast() {
  const { COLORS, DIMENSIONS } = useTheme();
  const { scrollHandler, scrollY } = useScrollAnimated();
  const {
    params: { podcast: podcast__ },
  }: RouteProp<{ params: { podcast: IPodcast } }, "params"> = useRoute();

  const userName = useTypedSelector((state: RootState) => state.auth.userName);
  const userId = useTypedSelector((state: RootState) => state.auth.id);

  const [comment, setComment] = useState("");
  const [answer, setAnswer] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const [loadingComment, setLoadingComment] = useState(false);
  const [loadingAnswerComment, setLoadingAnswerComment] = useState(false);

  const [podcast, setPodcast] = useState<IPodcast>(podcast__);

  const [selectedCommentIndex, setSelectedCommentIndex] = useState<
    number | null
  >(null);

  const answersModalizeRef = useRef<Modalize>(null);
  const { height } = Dimensions.get("window");

  const onPressPlayButton = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const onPressLikeButton = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  const onPressAnswers = (index: number) => {
    setSelectedCommentIndex(index);
    answersModalizeRef.current?.open();
  };

  const onPressClose = () => {
    setSelectedCommentIndex(null);
    answersModalizeRef.current?.close();
  };

  const getColor = useMemo(() => getRadomColor(), []);

  const getFistLetterFromUserName = (name: string | null) => {
    const [firstLetter] = (name ?? "").trim();
    return firstLetter;
  };

  const sendComment = async () => {
    try {
      setLoadingComment(true);

      const {
        data: {
          data: { result },
        },
      } = await api.post<SendCommentResponse>("/podcast/send_comment", {
        comment: comment,
        episodeId: podcast.episode.id,
      });

      if (!result) {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: ERROS.UNKNOWN_SEND_COMMENT_ERROR,
        });
      }
      const {
        data: { data },
      } = await api.get<CommentsResponse>(
        `/podcast/comments/${podcast.episode.id}`
      );

      setPodcast((podcast) => ({ ...podcast, comments: data }));

      setComment("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingComment(false);
    }
  };

  const answerComment = async (comment_id: number) => {
    try {
      setLoadingAnswerComment(true);

      const {
        data: {
          data: { result },
        },
      } = await api.post<SendCommentResponse>("/podcast/answer_comment", {
        comment: answer,
        episodeId: podcast.episode.id,
        answerId: comment_id,
      });

      if (!result) {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: ERROS.UNKNOWN_SEND_COMMENT_ERROR,
        });
      }
      const {
        data: { data },
      } = await api.get<CommentsResponse>(
        `/podcast/comments/${podcast.episode.id}`
      );

      setPodcast((podcast) => ({ ...podcast, comments: data }));

      setAnswer("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAnswerComment(false);
    }
  };

  return (
    <>
      <Header
        title={podcast.titulo}
        scrollY={scrollY}
        backgroundColor={HexToHSL(
          podcastColor(podcast.id),
          DIMENSIONS.HSL_LIGHTNESS,
          0.9
        )}
      />

      <Container onScroll={scrollHandler} scrollEventThrottle={16}>
        <GradientContainer
          color={podcastColor(podcast.id)}
          backgroundColorGradientCount={2}
        >
          <Group>
            <Head>
              <Avatar>
                <CachedSvgUri
                  width="100%"
                  height="100%"
                  uri={podcastIcon(podcast.id)}
                />
              </Avatar>
              <Title fontSize="28px" marginBottom="10px">
                {podcast.episode.title}
              </Title>
              <Subtitle fontSize="12px" marginTop="0px" marginBottom="10px">
                <InfoText>{podcast.titulo}</InfoText> por{" "}
                <InfoText>{podcast.apresentador}</InfoText>
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
              <Subtitle fontSize="12px">{podcast.episode.description}</Subtitle>
            </Head>
          </Group>
        </GradientContainer>
        <Comments>
          <Group>
            <CommentHeader>
              <Title fontSize="16px">
                Comentários ({podcast.comments.length})
              </Title>
            </CommentHeader>
          </Group>
          <CommentContainer>
            <ProfileAvatar size={50} color={getColor}>
              <Title>{getFistLetterFromUserName(userName)}</Title>
            </ProfileAvatar>
            <CommentInput
              placeholder="Faça seu comentário medíocre"
              placeholderTextColor={COLORS.TEXT_40}
              onSubmitEditing={sendComment}
              value={comment}
              editable={!loadingComment}
              onChangeText={(text) => setComment(text)}
            />
            {loadingComment && (
              <Spinner borderWidth={2} size={25} color={COLORS.BORDER} />
            )}
          </CommentContainer>
          {podcast.comments.data.map((comment: IComment, index) => (
            <Comment
              key={index}
              comment={comment}
              onPressComment={() => onPressAnswers(index)}
              isLastComment={podcast.comments.length - 1 === index}
            />
          ))}
        </Comments>
      </Container>

      <Modalize
        ref={answersModalizeRef}
        keyboardAvoidingBehavior="height"
        modalHeight={height * 0.73}
        modalStyle={{
          backgroundColor: COLORS.BACKGROUND,
        }}
        handleStyle={{
          backgroundColor: COLORS.BACKGROUND,
        }}
        HeaderComponent={
          <AnswerHeader>
            <Title fontSize="18px">Respostas</Title>
            <TouchableOpacity onPress={onPressClose}>
              <Close />
            </TouchableOpacity>
          </AnswerHeader>
        }
      >
        <Comments>
          {selectedCommentIndex !== null ? (
            <>
              <Comment
                disabledCommentPress
                showAnswers={false}
                comment={
                  podcast.comments.data[selectedCommentIndex] as IComment
                }
              />
              <CommentContainer>
                <ProfileAvatar size={40} color={getColor}>
                  <Title fontSize="24px" color="white">
                    {getFistLetterFromUserName(userName)}
                  </Title>
                </ProfileAvatar>
                <CommentInput
                  placeholder="Responda esse comentário medíocre"
                  placeholderTextColor={COLORS.TEXT_40}
                  onSubmitEditing={() =>
                    answerComment(
                      podcast.comments.data[selectedCommentIndex].cod
                    )
                  }
                  value={answer}
                  editable={!loadingAnswerComment}
                  onChangeText={(text) => setAnswer(text)}
                />

                {loadingAnswerComment && (
                  <Spinner borderWidth={2} size={25} color={COLORS.BORDER} />
                )}
              </CommentContainer>

              {podcast.comments.data[selectedCommentIndex].respostas.map(
                (answer, index) => (
                  <Comment
                    key={index}
                    comment={answer as IComment}
                    disabledCommentPress
                    showAnswers={false}
                    isLastComment={
                      podcast.comments.data[selectedCommentIndex].respostas
                        .length -
                        1 ===
                      index
                    }
                  />
                )
              )}
            </>
          ) : (
            <></>
          )}
        </Comments>
      </Modalize>
    </>
  );
}
