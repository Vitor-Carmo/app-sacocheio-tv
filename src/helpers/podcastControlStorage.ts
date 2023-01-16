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

export const getPodcastFilePath = (id: string | number) => podcastsDir + `${id}.mp3`;

export async function downloadPodcast(podcast: IEpisodeDownloaded) {
  try {
    if (!podcast.audio || getState().podcast.podcastDownloadResumable) {
      return;
    }

    await ensurePodcastDirExists();

    dispatch({
      type: setPodcastDownloadResumable.type,
      payload: {
        episodeIdThatIsDownloading: podcast.id,
        podcastDownloadResumable: await FileSystem.createDownloadResumable(
          podcast.audio,
          getPodcastFilePath(podcast.id),
          { cache: true },
          callback
        ),
      },
    });

    await getState().podcast.podcastDownloadResumable?.downloadAsync();

    let podcasts: string | IEpisode[] | null = await AsyncStorage.getItem(
      ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS
    );

    if (!podcasts) {
      podcasts = [podcast];
      await AsyncStorage.setItem(
        ASYNC_STORAGE_KEYS.PODCASTS_DOWNLOADS,
        JSON.stringify([podcast])
      );
    } else {
      podcasts = JSON.parse(podcasts) as IEpisode[];
      const podcastAlreadyExist = podcasts.find(
        (podcast_) => podcast_.id === podcast.id
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

    // put here a notification saying that the podcast was downloaded

    /*   return download?.uri; */

    console.log("podcasts downloaded => ", podcasts.length);

    dispatch({
      type: setPodcastDownloadResumable.type,
      payload: {
        podcastDownloadResumable: null,
        episodeIdThatIsDownloading: null,
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
  await FileSystem.deleteAsync( getPodcastFilePath(id));
}

export async function removeAllPodcasts() {
  await FileSystem.deleteAsync(podcastsDir);
}
