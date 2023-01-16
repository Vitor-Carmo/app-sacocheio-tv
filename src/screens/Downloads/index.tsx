import { ReactElement, useState } from "react";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListRenderItemInfo, ListRenderItem } from "react-native";

import Podcast from "../../components/Podcast";

import { PodcastList } from "./styles";
import { podcastsDir } from "../../helpers";
import { ASYNC_STORAGE_KEYS } from "../../constants";

export default function Downloads() {
  const [podcasts, setPodcasts] = useState<IEpisodeDownloaded[]>([]);

  useEffect(() => {
    (async () => {
      const downloadedPodcasts = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS
      );

      if (downloadedPodcasts) {
        setPodcasts(JSON.parse(downloadedPodcasts) as IEpisodeDownloaded[]);
        console.log(JSON.parse(downloadedPodcasts));
      }
    })();
  }, []);

  return (
    <PodcastList
      data={podcasts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <Podcast
          id={item.id}
          podcastId={item.podcastId as number}
          titulo={item.title as string}
          data={item.data}
          descricao={item.description as string}
          isFavorite={item.isFavorite}
          slug={item.slug}
          podcastName={item.podcastName}
          thumbnail={item.thumbnail}
          podcastUrl={item.podcastUrl}
          isLastPodcast={podcasts.length - 1 === index}
        />
      )}
    />
  );
}
