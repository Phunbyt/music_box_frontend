/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext } from 'react';
import PlayerContext from '../../Contexts/playerContext';
import classes from './Player.module.css';

const Queue = () => {
  const { songs, currentSong, SetCurrent, toggleRandom } = useContext(PlayerContext);
  const queuedSongs = songs.map((song, index) => {
    return (
      <div
        className={classes.queued_songs}
        key={song.id}
        onClick={() => SetCurrent(index)}
      >
        <div className={classes.queued_songs_details}>
          <div className={classes.queued_songs_image}>
            <img src={song.listenPic} alt="" />
          </div>
          <div className={classes.queued_songs_title}>
            <div>{song.trackTitle}</div>
            <div>
              {song.trackArtist} /{" "}
              {(songs[currentSong].duration / 60).toFixed(2)}{" "}
            </div>
          </div>
        </div>
        <div className={classes.queued_songs_bttn}>
          <span className={classes.options}>...</span>
          <span className={classes.remove}>
            <i className="fas fa-times-circle" />
          </span>
        </div>
      </div>
    );
  });
  return (
    <>
      {songs.length > 0 ? (
        <div>
          <div className={classes.queued_songs}>
            <div className={classes.queued_songs_image}>
              <img src={songs[currentSong].listenPic} alt="" />
              <i className="fas fa-music currently-playing-song-icon" />
            </div>
            <div>{songs[currentSong].trackTitle}</div>
            <div>
              {songs[currentSong].trackArtist} /{" "}
              {(songs[currentSong].duration / 60).toFixed(2)}
            </div>
            <div className={classes.queued_songs_bttn}>
              <span className={classes.options}>...</span>
              <span className={classes.remove}>
                <i className="fas fa-times-circle" />
              </span>
            </div>
          </div>
          <div className={classes.next_shuffle_spans_div}>
            <span>Next Up</span>
            <span onClick={toggleRandom}>Shuffle</span>
          </div>
          {queuedSongs}
        </div>
      ) : (
        <p className={classes.empty_queue_paragraph}>Play Songs Please</p>
      )}
    </>
  );
};

export default Queue;
