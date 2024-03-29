import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Title, Subtitle } from "../../styles/global";
import {
  Container,
  Header,
  HeadContent,
  Podcast,
  PodcastContainer,
  PodcastContent,
} from "./styles";

import AnchorButton from "../AnchorButton";
import CachedSvgUri from "../CachedSvgUri";
import { LoadingLikedEpisodes } from "../Loading";
import cachingRequest from "../../services/cache";
import api from "../../services/api";
import { podcastIcon, formateDate } from "../../helpers";

export default function LikedEpisodes() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [likedEpisodes, setLikedEpisodes] = useState<IFavoriteEpisode[]>([]);
  const [loadingEpisode, setLoadingEpisode] = useState(false);

  const handlePressNavigateToAllLiked = () => {
    navigation.navigate("Libraries", {
      screen: "Library",
      params: {
        screen: "Likes",
      },
      initial: false,
    });
  };

  const handlePressPodcast = async (url: string | undefined, slug: string) => {
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

  useEffect(() => {
    const handleFetchLikedEpisodes = async () => {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await api.get<FavoritesEpisodeResponse>("/podcast/favorites/3");

        setLikedEpisodes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handleFetchLikedEpisodes();
  }, []);

  return (
    <>
      {!loading ? (
        <Container show={!!likedEpisodes.length}>
          <Header>
            <HeadContent>
              <Title>Episódios Curtidos</Title>
              <Subtitle>
                Veja os episódios que você mais gostou da plataforma.
              </Subtitle>
            </HeadContent>
            <AnchorButton onPress={handlePressNavigateToAllLiked}>
              Veja todos
            </AnchorButton>
          </Header>
          <View>
            {likedEpisodes.map((podcast, index) => (
              <Podcast
                lastEpisode={likedEpisodes.length - 1 === index}
                key={podcast.episode.id}
                disabled={loadingEpisode}
                onPress={() =>
                  handlePressPodcast(
                    podcast.episode.podcastName,
                    podcast.episode.slug
                  )
                }
              >
                <PodcastContent>
                  <Title fontSize="16px">{podcast.episode.titulo}</Title>
                  <Subtitle fontSize="11px">{`${
                    podcast.titulo
                  }  .  ${formateDate(podcast.episode.data)}`}</Subtitle>
                </PodcastContent>
                <PodcastContainer>
                  <CachedSvgUri
                    width={120}
                    height={120}
                    uri={podcastIcon(podcast.id)}
                  />
                </PodcastContainer>
              </Podcast>
            ))}
          </View>
        </Container>
      ) : (
        <LoadingLikedEpisodes />
      )}
    </>
  );
}
