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

import CachedSvgUri from "../CachedSvgUri";
import Heart from "../Heart";

interface IFeaturedPodcastProps {
  marginRight?: string | null;
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
        <Avatar>
          <CachedSvgUri width={45} height={45} uri={podcastIcon} />
        </Avatar>
        <Title fontSize="12px">{podcastTitle}</Title>
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
