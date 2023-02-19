import * as FileSystem from "expo-file-system";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ERROS, ASYNC_STORAGE_KEYS } from "../constants";
import store, { RootState } from "../store";
import {
  setPodcastDownloadResumable,
  setPodcastDownloadResumableProgress,
} from "../store/duck/podcast";

export const podcastsDir = FileSystem.documentDirectory + "podcasts/";

let resumable: FileSystem.DownloadResumable | null = null;

const { getState, dispatch } = store;

const callback = (downloadProgress: FileSystem.DownloadProgressData) => {
  dispatch({
    type: setPodcastDownloadResumableProgress.type,
    payload: {
      podcastDownloadResumableProgress: downloadProgress,
    },
  });
};

async function ensurePodcastDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(podcastsDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(podcastsDir, { intermediates: true });
  }
}

export const getPodcastFilePath = (id: string | number) =>
  podcastsDir + `${id}.mp3`;

const getTheDownloadedPodcast = async (podcast: IPodcastDownloaded) => {
  const downloadedPodcastsStorage = await AsyncStorage.getItem(
    ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS
  );

  const downloadedPodcasts = downloadedPodcastsStorage
    ? (JSON.parse(downloadedPodcastsStorage) as IPodcastDownloaded[])
    : null;

  if (!downloadedPodcasts) return null;

  return downloadedPodcasts.find(
    (podcastDownloaded) => podcastDownloaded.episode.id == podcast.episode.id
  );
};

export async function downloadPodcast(podcast: IPodcastDownloaded) {
  try {
    if (!podcast.episode.audio || getState().podcast.podcastDownloadResumable) {
      return;
    }

    await ensurePodcastDirExists();

    const isPodcastDownloaded = !!(await getTheDownloadedPodcast(podcast));

    if (isPodcastDownloaded) {
      await removePodcast(podcast.episode.id);
      return;
    }

    dispatch({
      type: setPodcastDownloadResumable.type,
      payload: {
        episodeIdThatIsDownloading: podcast.episode.id,
        podcastDownloadResumable: await FileSystem.createDownloadResumable(
          podcast.episode.audio,
          getPodcastFilePath(podcast.episode.id),
          { cache: true },
          callback
        ),
      },
    });

    await getState().podcast.podcastDownloadResumable?.downloadAsync();

    let podcasts: string | IPodcast[] | null = await AsyncStorage.getItem(
      ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS
    );

    if (!podcasts) {
      podcasts = [podcast];
      await AsyncStorage.setItem(
        ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS,
        JSON.stringify([podcast])
      );
    } else {
      podcasts = JSON.parse(podcasts) as IPodcast[];
      const podcastAlreadyExist = podcasts.find(
        (podcast_) => podcast_.episode.id === podcast.episode.id
      );

      if (podcastAlreadyExist) {
        return;
      }
      podcasts.push(podcast);

      await AsyncStorage.setItem(
        ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS,
        JSON.stringify(podcasts)
      );
    }

    console.log("podcasts downloaded => ", podcasts.length);

    dispatch({
      type: setPodcastDownloadResumable.type,
      payload: {
        podcastDownloadResumable: null,
        episodeIdThatIsDownloading: null,
      },
    });

    dispatch({
      type: setPodcastDownloadResumableProgress.type,
      payload: {
        podcastDownloadResumableProgress: 0,
      },
    });
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Erro",
      text2: ERROS.UNKNOWN_DOWNLOAD_PODCAST_ERROR,
    });

    console.error(error);
  }
}

export async function pausePodcast() {
  if (resumable) {
    await resumable.pauseAsync();
  }
}

export async function resumePodcast() {
  if (resumable) {
    await resumable.resumeAsync();
  }
}

export async function removePodcast(id: string | number) {
  try {
    let podcasts: string | IPodcast[] = (await AsyncStorage.getItem(
      ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS
    )) as string;

    podcasts = JSON.parse(podcasts) as IPodcast[];

    podcasts = podcasts.filter((podcast) => podcast.episode.id != id);

    await AsyncStorage.setItem(
      ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS,
      JSON.stringify(podcasts)
    );

    await FileSystem.deleteAsync(getPodcastFilePath(id));

    dispatch({
      type: setPodcastDownloadResumable.type,
      payload: {
        podcastDownloadResumable: null,
        episodeIdThatIsDownloading: null,
      },
    });

    Toast.show({
      type: "success",
      text1: "Boa, Boleta!",
      text2: "Podcast removido com sucesso!",
    });
  } catch (error) {
    console.log("error on deleting podcast from download", error);
  }
}

export async function removeAllPodcasts() {
  await FileSystem.deleteAsync(podcastsDir);
}
