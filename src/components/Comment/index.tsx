import React, { useMemo, useRef, RefObject } from "react";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";

import {
  Container,
  ProfileAvatar,
  Content,
  Answers,
  OptionButton,
} from "./styles";

import { Title, Subtitle } from "../../styles/global";
import { formateDate, getRadomColor, HexToHSL } from "../../helpers";
import { RootState, useTypedSelector } from "../../store";

import Options from "../Options";

interface ICommentProps {
  comment: IComment;
  isLastComment?: boolean;
  disabledCommentPress?: boolean;
  showAnswers?: boolean;
  onPressComment?: () => void;
  onPressOptions?: () => void;
}

export default function Comment({
  comment,
  isLastComment = false,
  disabledCommentPress = false,
  showAnswers = true,
  onPressComment = () => {},
  onPressOptions = () => {},
}: ICommentProps) {
  const { COLORS } = useTheme();
  const userId = useTypedSelector((state: RootState) => state.auth.id);

  const formateLocalDate = (data: string) => {
    const date = new Date(data);

    return formateDate(
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    );
  };

  const getColor = useMemo(() => getRadomColor(), []);

  const getFistLetterFromUserName = (name: string | null) => {
    const [firstLetter] = (name ?? "").trim();
    return firstLetter;
  };

  const isThisUser = comment.usuario === userId;

  return (
    <>
      <Container paddingLeft="20px" isLastComment={isLastComment}>
        <ProfileAvatar size={40} color={isThisUser ? COLORS.PRIMARY : getColor}>
          <Title fontSize="24px" color="white">
            {getFistLetterFromUserName(comment.nome)}
          </Title>
        </ProfileAvatar>
        <Content onPress={onPressComment} disabled={disabledCommentPress}>
          <Title
            fontSize="14px"
            marginBottom="3px"
            color={isThisUser ? COLORS.PRIMARY : null}
          >
            {comment.nome} • {formateLocalDate(comment.data)}
          </Title>
          <Subtitle fontSize="12px" marginTop="0px">
            {comment.comentario}
          </Subtitle>
          {showAnswers && comment.respostas?.length ? (
            <Answers>
              {comment.respostas.length} RESPOSTA
              {comment.respostas.length !== 1 ? "S" : ""}
            </Answers>
          ) : (
            <></>
          )}
        </Content>
        {isThisUser ? (
          <OptionButton onPress={onPressOptions}>
            <Options />
          </OptionButton>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
