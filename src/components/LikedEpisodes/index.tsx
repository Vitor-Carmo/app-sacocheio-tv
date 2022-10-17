import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SvgUri } from "react-native-svg";

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
import { LoadingLikedEpisodes } from "../Loading";

import api from "../../services/api";
import { podcastIcon, formateDate } from "../../helpers";

export default function LikedEpisodes() {
  const [loading, setLoading] = useState(true);
  const [likedEpisodes, setLikedEpisodes] = useState<IFavoriteEpisode[]>([]);

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
            <AnchorButton>Veja todos</AnchorButton>
          </Header>
          <View>
            {likedEpisodes.map((podcast, index) => (
              <Podcast
                lastEpisode={likedEpisodes.length - 1 === index}
                key={podcast.episode.id}
              >
                <PodcastContent>
                  <Title fontSize="16px">{podcast.episode.titulo}</Title>
                  <Subtitle fontSize="11px">{`${
                    podcast.titulo
                  }  .  ${formateDate(podcast.episode.data)}`}</Subtitle>
                </PodcastContent>
                <PodcastContainer>
                  <SvgUri
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
