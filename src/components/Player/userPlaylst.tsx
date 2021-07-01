/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useContext } from 'react';
import axios from '../../utils/axiosInstance';
import PlayerContext from "../../Contexts/playerContext";

const UserPlaylist = () => {
  const { handleAddSong } = useContext(PlayerContext);
  const userId = localStorage.getItem('UserId');
  const [userPlaylist, setUserPlaylist] = useState([] as Record<string, any>[]);

  const data = async () => {
    const dataValue = await axios.get(`/api/user/playlists`);
    const value = dataValue.data.data.filter((playlist: Record<string, any>) => playlist.createdBy === userId);
    setUserPlaylist(value);
  };
  useEffect(() => {
    data();
  }, []);

  const playlistList = userPlaylist.map((playlist: Record<string, any>) => (
    <div className='playlist-display' onClick={() => handleAddSong(playlist._id)}>
      {playlist?.name}
    </div>
  ));
  return (
    <>
      {playlistList.length ? (
        playlistList
      ) : (
        <div className='playlist-display'>
          <p>No Playlist Found</p>
        </div>
      )}
    </>
  );
};

export default UserPlaylist;
