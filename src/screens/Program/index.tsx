import React, { useEffect, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { NativeScrollEvent } from "react-native";

import { useScrollAnimated } from "../../hooks";
import {
  Podcast,
  Header,
  GradientContainer,
  Loading,
  CachedSvgUri,
  Spinner,
} from "../../components";

import { Title, Subtitle } from "../../styles/global";
import { HexToHSL, podcastIcon, podcastColor } from "../../helpers";
import api from "../../services/api";

import {
  Container,
  Head,
  HeadContent,
  Avatar,
  Description,
  ProgramContainer,
  FilterContainer,
  FilterButton,
  FilterButtonTitle,
  PodcastContainer,
  LoadingContainer,
} from "./styles";
import { useTheme } from "styled-components";
import cachingRequest from "../../services/cache";
import axios from "axios";

export default function Program() {
  const {
    params: { podcast },
  }: RouteProp<{ params: { podcast: IProgram } }, "params"> = useRoute();

  const [loading, setLoading] = useState(true);
  const [loadingMorePodcast, setLoadingMorePodcast] = useState(false);
  const [page, setPage] = useState(2);
  const [program, setProgram] = useState<IProgram>(podcast);

  const { COLORS, DIMENSIONS } = useTheme();
  const { scrollY, scrollHandler } = useScrollAnimated();
  const { LoadingPodcast } = Loading;

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 20;

    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const handleFetchMorePodcasts = async () => {
    if (loadingMorePodcast || !program.next) return;

    setLoadingMorePodcast(true);

    try {
      const {
        data: { data },
      } = await api.get<ProgramResponse>(
        `/podcast/podcast/${podcast.url}?page=${page}`
      );
      setProgram((program) => ({
        ...data,
        episodes: [...program.episodes, ...data.episodes],
      }));
      setPage((page) => page + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMorePodcast(false);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const handleFetchProgram = async () => {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await cachingRequest(`podcast-${podcast.url}-episodes`, async () =>
          api.get<ProgramResponse>(`/podcast/podcast/${podcast.url}?page=1`, {
            cancelToken: source.token,
          })
        );

        setProgram(data);
      } catch (error) {
        if (axios.isCancel(source)) {
          setLoading(false);
          return;
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    handleFetchProgram();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <Header
        title="Podcast Saco Cheio"
        scrollY={scrollY}
        backgroundColor={HexToHSL(
          podcastColor(program.id),
          DIMENSIONS.HSL_LIGHTNESS,
          0.9
        )}
      />
      <Container
        onScroll={scrollHandler}
        onMomentumScrollEnd={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) handleFetchMorePodcasts();
        }}
        scrollEventThrottle={16}
      >
        <GradientContainer
          color={podcastColor(program.id)}
          opacity={0.75}
          backgroundColorGradientCount={2}
        >
          <ProgramContainer>
            <Head>
              <Avatar>
                <CachedSvgUri
                  uri={podcastIcon(program.id)}
                  width={150}
                  height={150}
                />
              </Avatar>
              <HeadContent>
                <Title fontSize="22px" marginBottom="15px">
                  {program.nome ?? program.titulo}
                </Title>
                <Subtitle fontSize="12px"> {program.apresentador}</Subtitle>
              </HeadContent>
            </Head>

            <Description>{program.descricao}</Description>
          </ProgramContainer>

          <FilterContainer>
            <Title fontSize="18px">Todos episódios</Title>
            <FilterButton>
              <FilterButtonTitle>Filtrar</FilterButtonTitle>
            </FilterButton>
          </FilterContainer>
        </GradientContainer>

        <PodcastContainer>
          {!loading ? (
            <>
              {program.episodes.map((episode, index) => (
                <Podcast
                  key={episode.id}
                  id={episode.id}
                  podcastId={program.id}
                  titulo={episode.titulo}
                  data={episode.data}
                  descricao={episode.descricao}
                  isFavorite={episode.isFavorite}
                  slug={episode.slug}
                  podcastName={episode.podcastName}
                  thumbnail={episode.thumbnail}
                  isLastPodcast={program.episodes.length - 1 === index}
                />
              ))}
            </>
          ) : (
            <>
              <LoadingPodcast />
              <LoadingPodcast />
              <LoadingPodcast />
              <LoadingPodcast isLastPodcast />
            </>
          )}
        </PodcastContainer>
        {loadingMorePodcast && (
          <LoadingContainer>
            <Spinner size={28} color={COLORS.TEXT_40} borderWidth={2} />
          </LoadingContainer>
        )}
      </Container>
    </>
  );
}
