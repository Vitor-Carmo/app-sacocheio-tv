import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GradientContainer } from "../../components";
import { Title, Subtitle } from "../../styles/global";

import {
  Container,
  Head,
  Podcast,
  PodcastImage,
  PodcastContent,
  Content,
} from "./styles";

export default function Programs() {
  const navigation = useNavigation();
  const podcasts: IPodcast[] = [
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

  const handleGoToProgram = (podcast: IPodcast) => {
    navigation.navigate("Program");
  };

  return (
    <Container>
      <GradientContainer>
        <Head>
          <Title marginBottom="5px">Programação da Rádio Saco Cheio TV</Title>
          <Subtitle fontSize="14px">
            Se divirta com todos os programas de rádio disponível na Saco Cheio
            TV
          </Subtitle>
        </Head>

        <Content>
          {podcasts.map((podcast, index) => (
            <Podcast
              key={index}
              isItTheLatestPodcastItem={index === podcasts.length - 1}
              onPress={() => handleGoToProgram(podcast)}
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
        </Content>
      </GradientContainer>
    </Container>
  );
}
