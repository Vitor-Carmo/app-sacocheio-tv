import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import cachingRequest from "../../services/cache";
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
import Spinner from "../Spinner";

interface IFeaturedPodcastProps {
  marginRight?: string | null;
  podcastIcon: string;
  episodePhoto: string;
  podcastTitle: string;
  episodeTitle: string;
  podcast: ILatestEpisode;
  slug: string;
  url: string;
}
export default function FeaturedPodcast({
  podcastIcon,
  episodePhoto,
  marginRight,
  podcastTitle,
  episodeTitle,
  podcast,
  slug,
  url,
}: IFeaturedPodcastProps) {
  const [liked, setLiked] = useState(false);
  const [loadingEpisode, setLoadingEpisode] = useState(false);

  const navigation = useNavigation();

  const handleLike = () => {
    setLiked((liked) => !liked);
  };

  const handlePressProgram = async () => {
    navigation.navigate("Programs", {
      screen: "Program",
      params: { podcast: { ...podcast, episodes: [] } },
      initial: false,
    });
  };

  const handlePressEpisode = async () => {
    setLoadingEpisode(true);
    try {
      const {
        data: { data },
      } = await cachingRequest(slug, async () =>
        api.get<PodcastResponse>(`/podcast/episode/${url}/${slug}`)
      );
      navigation.navigate("Programs", {
        screen: "Podcast",
        params: { podcast: data },
        initial: false,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingEpisode(false);
    }
  };

  return (
    <Container marginRight={marginRight}>
      <Info onPress={() => handlePressProgram()}>
        <Avatar>
          <CachedSvgUri width={45} height={45} uri={podcastIcon} />
        </Avatar>
        <Title fontSize="12px">{podcastTitle}</Title>
      </Info>

      <Episode source={{ uri: episodePhoto }}>
        <Content disabled={loadingEpisode} onPress={() => handlePressEpisode()}>
          <Like onPress={handleLike} disabled={loadingEpisode}>
            {loadingEpisode ? (
              <Spinner size={28} color="#fff" />
            ) : (
              <Heart
                isLiked={liked}
                size={28}
                borderColor="#fff"
                backgroundColor={liked ? "#fff" : "transparent"}
              />
            )}
          </Like>
          <LinearGradient>
            <Title fontSize="20px">{episodeTitle}</Title>
          </LinearGradient>
        </Content>
      </Episode>
    </Container>
  );
}
