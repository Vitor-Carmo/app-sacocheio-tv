import { createAction, createReducer } from "@reduxjs/toolkit";
import { Audio } from "expo-av";

export interface IPodcastState {
  playbackInstance: Audio.Sound | null;
  playbackState: {
    muted: boolean;
    playbackInstancePosition: number;
    playbackInstanceDuration: number;
    shouldPlay: boolean;
    isPlaying: boolean;
    isBuffering: boolean;
    isLoading: boolean;
    isLooping: boolean;
    shouldCorrectPitch: true;
    volume: number;
    rate: number;
    useNativeControls: boolean;
    throughEarpiece: boolean;
  };
  podcast: IPodcast | null;
}

const INITIAL_STATE: IPodcastState = {
  playbackInstance: null,
  playbackState: {
    muted: false,
    playbackInstancePosition: 0,
    playbackInstanceDuration: 0,
    shouldPlay: false,
    isPlaying: false,
    isBuffering: false,
    isLoading: true,
    isLooping: false,
    shouldCorrectPitch: true,
    volume: 1,
    rate: 1,
    useNativeControls: false,
    throughEarpiece: false,
  },
  podcast: null,
};

export const setPlayer = createAction("SET_PLAYER");
export const updatePlayerState = createAction("UPDATE_PLAYER_STATE");
export const play = createAction("PLAY");

export default createReducer(INITIAL_STATE, {
  [setPlayer.type]: (state, action) => ({
    ...state,
    playbackInstance: action.payload.playbackInstance,
    podcast: action.payload.podcast,
  }),

  [updatePlayerState.type]: (state, action) => ({
    ...state,
    playbackState: {
      ...state.playbackState,
      playbackInstancePosition:
        action.payload.playbackState.playbackInstancePosition,
      playbackInstanceDuration:
        action.payload.playbackState.playbackInstanceDuration ?? 0,
      shouldPlay: action.payload.playbackState.shouldPlay,
      isPlaying: action.payload.playbackState.isPlaying,
      isBuffering: action.payload.playbackState.isBuffering,
      rate: action.payload.playbackState.rate,
      muted: action.payload.playbackState.isMuted,
      volume: action.payload.playbackState.volume,
      isLooping: action.payload.playbackState.isLooping,
      shouldCorrectPitch: action.payload.playbackState.shouldCorrectPitch,
    },
  }),
});
