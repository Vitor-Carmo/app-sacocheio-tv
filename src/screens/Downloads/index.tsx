import { useState } from "react";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Podcast from "../../components/Podcast";
import { LoadingPodcast } from "../../components/Loading";

import { Container, NoDownloadContainer, Download } from "./styles";
import { ASYNC_STORAGE_KEYS } from "../../constants";
import { Title } from "../../styles/global";

export default function Downloads() {
  const [podcasts, setPodcasts] = useState<IPodcastDownloaded[]>([]);
  const [loading, setLoading] = useState(true);

  const getDownloadedPodcast  = async () => {
    setLoading(true);
    try {
      const downloadedPodcasts = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS
      );

      if (downloadedPodcasts) {
        setPodcasts(JSON.parse(downloadedPodcasts) as IPodcastDownloaded[]);
        console.log(JSON.parse(downloadedPodcasts));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  } 
  useEffect(() => {
    getDownloadedPodcast();
  }, []);

  return (
    <>
      {!loading && !podcasts.length ? (
        <NoDownloadContainer>
          <Download size={120} borderColor="#9E9E9E80" />
          <Title fontSize="20px" align="center" color="#9E9E9E80">
            {"Você ainda não baixou\nnenhum podcast!"}
          </Title>
        </NoDownloadContainer>
      ) : (
        <Container>
          <>
            {!loading ? (
              <>
                {podcasts.map((podcast, index) => (
                  <Podcast
                    key={podcast.episode.id}
                    id={podcast.episode.id}
                    podcastId={podcast.episode.podcastId as number}
                    titulo={podcast.episode.title as string}
                    data={podcast.episode.data}
                    descricao={podcast.episode.description as string}
                    isFavorite={podcast.episode.isFavorite}
                    slug={podcast.episode.slug}
                    podcastName={podcast.episode.podcastName}
                    thumbnail={podcast.episode.thumbnail}
                    podcastUrl={podcast.episode.podcastUrl}
                    isLastPodcast={podcasts.length - 1 === index}
                    onFinishDownload={getDownloadedPodcast}
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
          </>
        </Container>
      )}
    </>
  );
}
