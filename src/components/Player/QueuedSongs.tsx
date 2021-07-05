import React, { useContext } from 'react';
import PlayerContext from '../../Contexts/playerContext';

const Queue = () => {
  const { songs, currentSong } = useContext(PlayerContext);
  const queuedSongs = songs.map((song) => {
    return (
      <div className='queued_songs'>
        <div className='queued_songs_details'>
          <div className='queued_songs_image'>
            <img src={song.album.cover} alt='' />
          </div>
          <div className='queued_songs_title'>
            <div>{song.title}</div>
            <div>
              {song.artist.name} / {song.duration}{' '}
            </div>
          </div>
        </div>
        <div className='queued_songs_bttn'>
          <span className='options'>...</span>
          <span className='remove'>x</span>
        </div>
      </div>
    );
  });
  return (
    <>
      <div>
        <div className='queued_songs'>
          <div className='queued_songs_image'>
            <img src={songs[currentSong].album.cover} alt='' />
          </div>
          <div>{songs[currentSong].title}</div>
          <div>
            {songs[currentSong].artist.name} / {songs[currentSong].duration}
          </div>
          <div className='queued_songs_bttn'>
            <span className='options'>...</span>
            <span className='remove'>x</span>
          </div>
        </div>
        <div>
          <span>Next Up</span>
          <span>Shuffle</span>
        </div>
        {songs.length ? queuedSongs : <p style={{ border: '1px solid red', background: 'blue' }}>No Queued Songs</p>}
      </div>
    </>
  );
};

export default Queue;
