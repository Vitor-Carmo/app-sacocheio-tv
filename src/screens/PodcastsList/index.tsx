import React from "react";
import { Container } from "../../components";
import { Title, Subtitle } from "../../styles/global";

import { Head, Podcast, PodcastImage, PodcastContent } from "./styles";

export default function PodcastsList() {
  const podcasts = [
    {
      image: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
      title: "Podcast Saco Cheio",
      description:
        "O programa é para ouvintes que não procuram cultura, informação ou opiniões inteligentes. Durante uma hora que não procuram cultura, que não procuram cultura.",
    },
    {
      image: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
      title: "Podcast Saco Cheio",
      description:
        "O programa é para ouvintes que não procuram cultura, informação ou opiniões inteligentes. Durante uma hora que não procuram cultura, que não procuram cultura.",
    },
    {
      image: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
      title: "Podcast Saco Cheio",
      description:
        "O programa é para ouvintes que não procuram cultura, informação ou opiniões inteligentes. Durante uma hora que não procuram cultura, que não procuram cultura.",
    },
    {
      image: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
      title: "Podcast Saco Cheio",
      description:
        "O programa é para ouvintes que não procuram cultura, informação ou opiniões inteligentes. Durante uma hora que não procuram cultura, que não procuram cultura.",
    },
    {
      image: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
      title: "Podcast Saco Cheio",
      description:
        "O programa é para ouvintes que não procuram cultura, informação ou opiniões inteligentes. Durante uma hora que não procuram cultura, que não procuram cultura.",
    },
  ];
  
  return (
    <Container>
      <Head>
        <Title marginBottom="5px">Programação da Rádio Saco Cheio TV</Title>
        <Subtitle fontSize="14px">
          Se divirta com todos os programas de rádio disponível na Saco Cheio TV
        </Subtitle>
      </Head>
      {podcasts.map((podcast, index) => (
        <Podcast
          key={index}
          isItTheLatestPodcastItem={index === podcasts.length - 1}
        >
          <PodcastImage
            source={{
              uri: podcast.image,
            }}
          />
          <PodcastContent>
            <Title fontSize="16px" marginBottom="5px">
              {podcast.title}
            </Title>
            <Subtitle fontSize="12px" numberOfLines={4}>
              {podcast.description}
            </Subtitle>
          </PodcastContent>
        </Podcast>
      ))}
    </Container>
  );
}
