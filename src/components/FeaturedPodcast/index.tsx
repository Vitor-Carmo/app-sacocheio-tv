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
import { likeEpisode, podcastIcon } from "../../helpers";
import { LINKS } from "../../constants";
interface IFeaturedPodcastProps {
  marginRight?: string | null;
  podcast: ILatestEpisode;
}
export default function FeaturedPodcast({
  marginRight,
  podcast,
}: IFeaturedPodcastProps) {
  const [liked, setLiked] = useState(false);
  const [loadingEpisode, setLoadingEpisode] = useState(
    podcast.latest_episode.isFavorite
  );

  const navigation = useNavigation();

  const handleLike = async () => {
    setLoadingEpisode(true);

    try {
      const result = await likeEpisode(podcast.latest_episode.id);
      if (result) setLiked((liked) => !liked);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingEpisode(false);
    }
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
      } = await cachingRequest(podcast.latest_episode.slug, async () =>
        api.get<PodcastResponse>(
          `/podcast/episode/${podcast.url}/${podcast.latest_episode.slug}`
        )
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
          <CachedSvgUri width={45} height={45} uri={podcastIcon(podcast.id)} />
        </Avatar>
        <Title fontSize="12px">{podcast.nome}</Title>
      </Info>

      <Episode
        source={{
          uri: `${LINKS.MIDDLEWARE_API}/public/images/latest-episodes/${podcast.id}.png`,
        }}
      >
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
            <Title fontSize="20px">{podcast.latest_episode.titulo}</Title>
          </LinearGradient>
        </Content>
      </Episode>
    </Container>
  );
}
