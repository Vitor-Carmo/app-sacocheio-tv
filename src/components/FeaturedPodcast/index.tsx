import React, { useState } from "react";
import { Title } from "../../styles/global";
import {
  Container,
  Episode,
  Info,
  Avatar,
  LinearGradient,
  Content,
  Like,
} from "./styles";

import Heart from "../Heart";

interface IFeaturedPodcastProps {
  marginRight?: string;
  podcastIcon: string;
  episodePhoto: string;
  podcastTitle: string;
  episodeTitle: string;
}
export default function FeaturedPodcast({
  podcastIcon,
  episodePhoto,
  marginRight,
  podcastTitle,
  episodeTitle,
}: IFeaturedPodcastProps) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((liked) => !liked);
  };

  return (
    <Container marginRight={marginRight}>
      <Info>
        <Avatar
          source={{
            uri: podcastIcon,
          }}
        />
        <Title fontSize="10px">{podcastTitle}</Title>
      </Info>

      <Episode source={{ uri: episodePhoto }}>
        <Content>
          <Like onPress={handleLike}>
            <Heart
              isLiked={liked}
              size={28}
              borderColor="#fff"
              backgroundColor={liked ? "#fff" : "transparent"}
            />
          </Like>
          <LinearGradient>
            <Title fontSize="20px">{episodeTitle}</Title>
          </LinearGradient>
        </Content>
      </Episode>
    </Container>
  );
}
