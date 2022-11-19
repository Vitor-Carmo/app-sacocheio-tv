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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);
  const [podcast, setPodcast] = useState<IPodcast>(podcast__);

  const [answer, setAnswer] = useState<IComment>({
    nome: "",
    comentario: "",
    data: "",
    cod: 0,
    resposta: "",
    respostas: [],
    usuario: 0,
  });
  const [answers, setAnswers] = useState<IComment[]>([]);

  const answersModalizeRef = useRef<Modalize>(null);
  const { height } = Dimensions.get("window");

  const onPressPlayButton = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const onPressLikeButton = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  const onPressAnswers = (answer: IComment, answers: IComment[]) => {
    setAnswer(answer);
    setAnswers(answers);
    answersModalizeRef.current?.open();
  };

  const onPressClose = () => {
    setAnswer({
      nome: "",
      comentario: "",
      data: "",
      cod: 0,
      resposta: "",
      respostas: [],
      usuario: 0,
    });
    setAnswers([]);
    answersModalizeRef.current?.close();
  };

  const formateLocalDate = (data: string) => {
    const date = new Date(data);

    return formateDate(
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    );
  };

  const getArrayColor = useMemo(
    () => podcast.comments.data.map(() => getRadomColor()),
    [podcast]
  );

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
          {podcast.comments.data.map((comment, index) => (
            <Comment
              key={index}
              paddingLeft="20px"
              isLastComment={podcast.comments.length - 1 === index}
            >
              <ProfileAvatar size={40} color={getArrayColor[index]}>
                <Title fontSize="24px" color="white">
                  {getFistLetterFromUserName(comment.nome)}
                </Title>
              </ProfileAvatar>
              <CommentContent>
                <Title fontSize="14px" marginBottom="3px">
                  {comment.nome} • {formateLocalDate(comment.data)}
                </Title>

                <Subtitle fontSize="12px" marginTop="0px">
                  {comment.comentario}
                </Subtitle>
                {comment.respostas.length ? (
                  <TouchableOpacity
                    onPress={() => onPressAnswers(comment, comment.respostas)}
                  >
                    <Answers>
                      {comment.respostas.length} RESPOSTA
                      {comment.respostas.length !== 1 ? "S" : ""}
                    </Answers>
                  </TouchableOpacity>
                ) : (
                  <></>
                )}
              </CommentContent>
            </Comment>
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
      >
        <Comments>
          <AnswerHeader>
            <Title fontSize="18px">Respostas</Title>
            <TouchableOpacity onPress={onPressClose}>
              <Close />
            </TouchableOpacity>
          </AnswerHeader>
          <Comment>
            <ProfileAvatar size={40} color={getRadomColor()}>
              <Title fontSize="24px" color="white">
                {getFistLetterFromUserName(answer.nome)}
              </Title>
            </ProfileAvatar>
            <CommentContent>
              <Title fontSize="14px" marginBottom="5px">
                {answer.nome} • {formateLocalDate(answer.data)}
              </Title>

              <Subtitle fontSize="12px" marginTop="0px">
                {answer.comentario}
              </Subtitle>
            </CommentContent>
          </Comment>

          <CommentContainer>
            <ProfileAvatar size={40} color={getRadomColor()}>
              <Title fontSize="24px" color="white">
                {getFistLetterFromUserName(userName)}
              </Title>
            </ProfileAvatar>
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
              <ProfileAvatar size={30} color={getRadomColor()}>
                <Title fontSize="16px" color="white">
                  {getFistLetterFromUserName(answer.nome)}
                </Title>
              </ProfileAvatar>
              <CommentContent>
                <Title fontSize="12px" marginBottom="5px">
                  {answer.nome} • {formateLocalDate(answer.data)}
                </Title>

                <Subtitle fontSize="10px" marginTop="0px">
                  {answer.comentario}
                </Subtitle>
              </CommentContent>
            </Comment>
          ))}
        </Comments>
      </Modalize>
    </>
  );
}
