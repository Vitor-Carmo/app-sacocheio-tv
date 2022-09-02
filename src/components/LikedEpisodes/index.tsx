import React from "react";
import { View } from "react-native";

import { Title, Subtitle } from "../../styles/global";
import { Container, Header, HeadContent, Podcast, PodcastImage, PodcastContent } from "./styles";
import AnchorButton from "../AnchorButton";

export default function LikedEpisodes() {
  const likedEpisodes = [
    {
      icon: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
      title: "#09 - Entrevista com a entidade RedPill",
      info: "Tarja preta FM . 13 mar, 2022",
    },
    {
      icon: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
      title: "#09 - Entrevista com a entidade RedPill",
      info: "Tarja preta FM . 13 mar, 2022",
    },
    {
      icon: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
      title: "#09 - Entrevista com a entidade RedPill",
      info: "Tarja preta FM . 13 mar, 2022",
    },
  ];
  return (
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
        {
          likedEpisodes.map((episode, index) => (
            <Podcast
              lastEpisode={(likedEpisodes.length - 1) === index}
              key={index}
            >
              <PodcastContent>
                <Title fontSize="16px">{episode.title}</Title>
                <Subtitle fontSize="10px">
                  {episode.info}
                </Subtitle>
              </PodcastContent>
              <PodcastImage
                source={{ uri: episode.icon }}
              />
            </Podcast>
          ))
        }
      </View>
    </Container>
  );
}
