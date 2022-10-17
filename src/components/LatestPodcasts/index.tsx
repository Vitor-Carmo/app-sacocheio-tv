import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { LINKS } from "../../constants";
import api from "../../services/api";

import FeaturedPodcast from "../FeaturedPodcast";
import AnchorButton from "../AnchorButton";
import { LatestPodcasts as LatestPodcastsLoading } from "../Loading";

import { Title, Subtitle } from "../../styles/global";
import { Container, Header, Content, ScrollHorizontal } from "./styles";

export default function LatestPodcasts() {
  const [podcasts, setPodcasts] = useState<IEpisode[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigation();

  const handleNavigateToPrograms = () => {
    navigate.navigate("Programs");
  };

  useEffect(() => {
    const handleFetchLatestEpisodes = async () => {
      try {
        const {
          data: { data },
        } = await api.post<LatestEpisodesResponse>(
          "/podcast/latest_episodes_of_each_podcast"
        );
        setPodcasts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handleFetchLatestEpisodes();
  }, []);
  return (
    <>
      {!loading ? (
        <Container>
          <Header>
            <Content>
              <Title>Últimos Episódios</Title>
              <Subtitle>
                Os últimos episódios postados de cada programa da saco cheio tv.
              </Subtitle>
            </Content>
            <AnchorButton onPress={handleNavigateToPrograms}>
              Veja todos
            </AnchorButton>
          </Header>
          <ScrollHorizontal>
            {podcasts.map((podcast, index) => (
              <FeaturedPodcast
                key={podcast.id}
                podcastIcon={`${LINKS.SACOCHEIO_TV_PORTAL}/assets/home/podcasts/${podcast.id}.svg`}
                episodePhoto={`${LINKS.MIDDLEWARE_API}/public/images/latest-episodes/${podcast.id}.png`}
                podcastTitle={podcast.nome}
                episodeTitle={podcast.latest_episode.titulo}
                marginRight={podcasts.length - 1 === index ? "30px" : null}
              />
            ))}
          </ScrollHorizontal>
        </Container>
      ) : (
        <LatestPodcastsLoading />
      )}
    </>
  );
}
