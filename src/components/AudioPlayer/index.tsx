import React, { useState } from "react";
import Heart from "../Heart";
import Play from "../Play";
import Pause from "../Pause";

import {
  Container,
  TimeLine,
  Line,
  Content,
  TouchableAction,
  TouchablePodcast,
  Title,
} from "./styles";

export default function AudioPlayer() {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePressLike = (): void => {
    setIsLiked((isLiked) => !isLiked);
  };

  const handlePressPlay = (): void => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  return (
    <Container>
      <TimeLine>
        <Line progress={50} />
      </TimeLine>
      <Content>
        <TouchableAction onPress={handlePressLike}>
          <Heart size={22} isLiked={isLiked} />
        </TouchableAction>
        <TouchablePodcast>
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
  );
}
