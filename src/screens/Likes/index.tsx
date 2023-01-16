import React, { useEffect, useState } from "react";
import Podcast from "../../components/Podcast";
import * as Loading from "../../components/Loading";

import api from "../../services/api";

import { Container } from "./styles";

export default function Likes() {
  const [podcasts, setPodcasts] = useState<IFavoriteEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const { LoadingPodcast } = Loading;

  const handleRemoveEpisode = (index: number) => {
    setPodcasts((podcasts) =>
      podcasts.filter((podcast, podcastIndex) => podcastIndex !== index)
    );
  };

  useEffect(() => {
    const handleFetchLikedEpisodes = async () => {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await api.get<FavoritesEpisodeResponse>("/podcast/favorites");
        setPodcasts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handleFetchLikedEpisodes();
  }, []);

  return (
    <Container>
      {!loading ? (
        <>
          {podcasts.map((podcast, index) => (
            <Podcast
              key={podcast.episode.id}
              id={podcast.episode.id}
              podcastId={podcast.id}
              titulo={podcast.episode.titulo}
              data={podcast.episode.data}
              descricao={podcast.episode.descricao}
              isFavorite={podcast.episode.isFavorite}
              slug={podcast.episode.slug}
              podcastName={podcast.episode.podcastName}
              thumbnail={podcast.episode.thumbnail}
              podcastUrl={podcast.url}
              isLastPodcast={podcasts.length - 1 === index}
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
    </Container>
  );
}
