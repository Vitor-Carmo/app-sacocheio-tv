import { Dispatch } from "redux";
import { Audio, AVPlaybackStatus } from "expo-av";
import {
  updatePlayerState,
  setPlayer,
  updateSavedPointTime,
} from "../duck/podcast";
import { RootState } from "../";
import api from "../../services/api";

export const playPodcast = (podcast: IPodcast) => {
  return async (dispatch: Dispatch, state: () => RootState) => {
    const {
      podcast: { playbackInstance, playbackState, podcast: current_podcast },
    } = state();

    const createPodcast = async () => {
      try {
        const {
          data: { data },
        } = await api.get<GetTimeResponse>(
          `podcast/get_time/${podcast.episode.id}`
        );

        dispatch({
          type: updateSavedPointTime.type,
          payload: {
            saved_point_time: data.minuto,
          },
        });

        const { sound } = await Audio.Sound.createAsync(
          {
            uri: podcast.episode.audio ?? "",
          },
          {
            shouldPlay: true,
            progressUpdateIntervalMillis: 1000 / playbackState.rate,
            rate: playbackState.rate,
            shouldCorrectPitch: playbackState.shouldCorrectPitch,
            volume: playbackState.volume,
            isMuted: playbackState.muted,
            isLooping: playbackState.isLooping,
            positionMillis: data.minuto,
          },
          async (status: AVPlaybackStatus) => {
            if (status.isLoaded) {
              dispatch({
                type: updatePlayerState.type,
                payload: {
                  playbackState: {
                    playbackInstancePosition: status.positionMillis,
                    playbackInstanceDuration: status.durationMillis ?? 0,
                    shouldPlay: status.shouldPlay,
                    isPlaying: status.isPlaying,
                    isBuffering: status.isBuffering,
                    rate: status.rate,
                    muted: status.isMuted,
                    volume: status.volume,
                    isLooping: status.isLooping,
                    shouldCorrectPitch: status.shouldCorrectPitch,
                  },
                },
              });
            }
          }
        );

        dispatch({
          type: setPlayer.type,
          payload: { playbackInstance: sound, podcast: podcast },
        });
      } catch (error) {
        dispatch({
          type: setPlayer.type,
          payload: { playbackInstance: null, podcast: null },
        });

        console.log(error);
      }
    };

    if (!playbackInstance) {
      createPodcast();
      return;
    }

    if (current_podcast?.episode?.id !== podcast.episode.id) {
      await playbackInstance?.unloadAsync();
      createPodcast();
      return;
    }

    if (playbackState.isPlaying) {
      playbackInstance.pauseAsync();
      return;
    }

    if (
      playbackState.playbackInstancePosition ===
      playbackState.playbackInstanceDuration
    ) {
      await playbackInstance?.setPositionAsync(0);
    }

    playbackInstance.playAsync();
  };
};
