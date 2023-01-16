import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import FeaturedPodcast from "../FeaturedPodcast";
import AnchorButton from "../AnchorButton";
import { LatestPodcasts as LatestPodcastsLoading } from "../Loading";

import { Title, Subtitle } from "../../styles/global";
import { Container, Header, Content, ScrollHorizontal } from "./styles";

export default function LatestPodcasts() {
  const [podcasts, setPodcasts] = useState<ILatestEpisode[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handleNavigateToPrograms = () => {
    navigation.navigate("Programs");
  };

  useEffect(() => {
    const handleFetchLatestEpisodes = async () => {
      setLoading(true);
      try {
        const {
          data: { data, error },
        } = await api.post<LatestEpisodesResponse>(
          "/podcast/latest_episodes_of_each_podcast"
        );

        if(!error){
          setPodcasts(data);
        }
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
                marginRight={podcasts.length - 1 === index ? "30px" : null}
                podcast={podcast}
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
