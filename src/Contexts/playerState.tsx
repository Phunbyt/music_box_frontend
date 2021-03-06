/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useReducer } from 'react';
import playerContext from './playerContext';
import playerReducer from './playerReducer';
import axios from '../utils/axiosInstance';

import { SET_CURRENT_SONG, TOGGLE_RANDOM, TOGGLE_REPEAT, TOGGLE_PLAYING, SET_SONGS, TOGGLE_ISACTIVE } from './types';

const PlayerState = ({
  children,
}: {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}) => {
  const initialState = {
    currentSong: 0,
    songs: [] as Record<string, any>[],
    repeat: false,
    random: false,
    isActive: false,
    playing: false,
    audio: null,
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  const addToListeningHistory = async () => {
    try {
      const data = {
        songIndex: state.songs[state.currentSong].id,
      };
      await axios.post(`/api/users/listening`, data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Set playing state
  const togglePlaying = () => {
    if (state.songs.length > 0) {
      dispatch({ type: TOGGLE_PLAYING, data: !state.playing });
    }
    if (state.playing) {
      addToListeningHistory();
    }
  };
  // Set isActive
  const setIsActive = () => dispatch({ type: TOGGLE_ISACTIVE, data: !state.isActive });
  // Set current song
  const SetCurrent = (id: number) => dispatch({ type: SET_CURRENT_SONG, data: id });

  // Set Songs
  const setSong = (arr: Record<string, any>[]) => dispatch({ type: SET_SONGS, data: arr });

  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songs.length - 1);
    } else {
      SetCurrent(state.currentSong - 1);
    }
  };
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrent(0);
      dispatch({ type: TOGGLE_ISACTIVE, data: false });
    } else {
      SetCurrent(state.currentSong + 1);
      dispatch({ type: TOGGLE_ISACTIVE, data: false });
    }
  };

  // Repeat and Random
  const toggleRepeat = () => dispatch({ type: TOGGLE_REPEAT, data: !state.repeat });
  const toggleRandom = () => dispatch({ type: TOGGLE_RANDOM, data: !state.random });

  // End of Song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      state.songs.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }
    if (state.repeat) {
      nextSong();
    } else if (state.currentSong === state.songs.length - 1) {
      togglePlaying();
      return;
    } else {
      nextSong();
    }
  };

  const handleLike = () => {
    if (state.songs[state.currentSong]) {
      setIsActive();
    }
  };

  const handleClick = (arr: Record<string, any>[], i: number) => {
    setSong(arr);
    SetCurrent(i);
  };

  const handleAddSong = async (id: number) => {
    try {
      if (state.songs[state.currentSong]) {
        const data = {
          songId: state.songs[state.currentSong].id,
        };
        const addSong = await axios.put(`/api/user/addsong/${id}`, data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songs: state.songs,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        isActive: state.isActive,
        audio: state.audio,
        nextSong,
        prevSong,
        SetCurrent,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        setSong,
        handleEnd,
        handleClick,
        handleAddSong,
        handleLike,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default PlayerState;
