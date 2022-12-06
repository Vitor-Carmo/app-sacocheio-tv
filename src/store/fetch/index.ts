import { Dispatch } from "redux";
import { Audio, AVPlaybackStatus } from "expo-av";
import { updatePlayerState, setPlayer } from "../duck/podcast";
import { RootState } from "../";

export const playPodcast = (podcast: IPodcast) => {
  return async (dispatch: Dispatch, state: () => RootState) => {
    const {
      podcast: { playbackInstance, playbackState, podcast: current_podcast },
    } = state();

    const createPodcast = async () => {
      const { sound } = await Audio.Sound.createAsync(
        {
          uri: podcast.episode.audio ?? "",
        },
        {
          shouldPlay: true,
          progressUpdateIntervalMillis: 1000,
          rate: playbackState.rate,
          shouldCorrectPitch: playbackState.shouldCorrectPitch,
          volume: playbackState.volume,
          isMuted: playbackState.muted,
          isLooping: playbackState.isLooping,
        },
        (status: AVPlaybackStatus) => {
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
