/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';

interface PlayerCOntextInterface {
  currentSong: number;
  songs: Record<string, any>[];
  nextSong: () => void;
  prevSong: () => void;
  repeat: boolean;
  random: boolean;
  playing: boolean;
  isActive: boolean;
  toggleRandom: () => void;
  toggleRepeat: () => void;
  togglePlaying: () => void;
  handleEnd: () => void;
  SetCurrent: (id: number) => void;
  handleClick: (arr: Record<string, any>[], i: number) => void;
  setSong: (arr: Record<string, any>[]) => void;
  handleAddSong: (id: number) => void;
  handleLike: () => void;
  audio: React.LegacyRef<HTMLAudioElement>;
}

const playerContext = createContext({} as PlayerCOntextInterface);

export default playerContext;
