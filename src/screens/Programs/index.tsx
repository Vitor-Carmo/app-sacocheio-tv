import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { GradientContainer, Loading, CachedSvgUri } from "../../components";
import { Title, Subtitle } from "../../styles/global";
import api from "../../services/api";

import {
  Container,
  Head,
  Podcast,
  PodcastContainer,
  PodcastContent,
  Content,
} from "./styles";
import { podcastIcon } from "../../helpers";
export default function Programs() {
  const navigation = useNavigation();
  const [programs, setPrograms] = useState<IProgram[]>([]);
  const [loading, setLoading] = useState(true);

  const { LoadingPrograms } = Loading;

  const handlePressNavigateProgram = (podcast: IProgram) => {
    navigation.navigate("Program", {
      podcast: { ...podcast, episodes: [] },
    });
  };

  useEffect(() => {
    const handleFetchPrograms = async () => {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await api.get("/podcast/podcasts");

        setPrograms(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handleFetchPrograms();
  }, []);

  return (
    <Container>
      <GradientContainer backgroundColorGradientCount={1}>
        <Head>
          <Title marginBottom="5px">Programação da Rádio Saco Cheio TV</Title>
          <Subtitle fontSize="14px">
            Se divirta com todos os programas de rádio disponível na Saco Cheio
            TV
          </Subtitle>
        </Head>
      </GradientContainer>
      <Content>
        <>
          {!loading ? (
            <>
              {programs.map((podcast, index) => (
                <Podcast
                  key={podcast.id}
                  isItTheLatestPodcastItem={index === programs.length - 1}
                  onPress={() => handlePressNavigateProgram(podcast)}
                >
                  <PodcastContainer>
                    <CachedSvgUri
                      width={120}
                      height={120}
                      uri={podcastIcon(podcast.id)}
                    />
                  </PodcastContainer>
                  <PodcastContent>
                    <Title fontSize="16px" marginBottom="5px">
                      {podcast.nome}
                    </Title>
                    <Subtitle fontSize="12px" numberOfLines={3}>
                      {podcast.descricao}
                    </Subtitle>
                  </PodcastContent>
                </Podcast>
              ))}
            </>
          ) : (
            <>
              <LoadingPrograms />
              <LoadingPrograms />
              <LoadingPrograms />
              <LoadingPrograms />
              <LoadingPrograms />
              <LoadingPrograms />
              <LoadingPrograms />
              <LoadingPrograms />
              <LoadingPrograms />
              <LoadingPrograms isItTheLatestPodcastItem />
            </>
          )}
        </>
      </Content>
    </Container>
  );
}
