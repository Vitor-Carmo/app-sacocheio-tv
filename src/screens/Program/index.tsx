import React, { useCallback, useEffect, useState } from "react";
import {
  useRoute,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeScrollEvent, Dimensions } from "react-native";
import axios from "axios";
import {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

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

  const avatarStyle = useAnimatedStyle(() => {
    const animationSize = interpolate(
      scrollY.value,
      [0, 110],
      [150, 100],
      Extrapolate.CLAMP
    );

    return {
      width: animationSize,
      height: animationSize,
    };
  });

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 110], [1, 0], Extrapolate.CLAMP),
    };
  });

  const isCloseToBottom = (nativeEvent: NativeScrollEvent) => {
    const windowHeight = Dimensions.get("window").height;
    const height = nativeEvent.contentSize.height;
    const offset = nativeEvent.contentOffset.y;

    return windowHeight + offset >= height;
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

    setProgram(podcast);
    handleFetchProgram();
    return () => {
      source.cancel();
    };
  }, [podcast]);

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
              <Avatar style={[avatarStyle, opacityStyle]}>
                <CachedSvgUri
                  uri={podcastIcon(program.id)}
                  width="100%"
                  height="100%"
                />
              </Avatar>
              <HeadContent style={opacityStyle}>
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
                  podcastUrl={podcast.url}
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
