import { useSyncExternalStore } from "react";

type Listener = () => void;

let isPlaying = false;
let listeners: Listener[] = [];

export const musicStore = {
  getSnapshot: () => isPlaying,
  setPlaying: (playing: boolean) => {
    isPlaying = playing;
    listeners.forEach((l) => l());
  },
  toggle: () => {
    isPlaying = !isPlaying;
    listeners.forEach((l) => l());
  },
  subscribe: (listener: Listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
};

export function useMusic() {
  const playing = useSyncExternalStore(musicStore.subscribe, musicStore.getSnapshot, () => false);

  return {
    isPlaying: playing,
    toggle: musicStore.toggle,
    setPlaying: musicStore.setPlaying,
  };
}
