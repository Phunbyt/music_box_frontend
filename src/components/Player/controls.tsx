/* eslint-disable no-self-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef, useContext } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import playerContext from "../../Contexts/playerContext";
import Queue from "./QueuedSongs";
import UserPlaylist from "./userPlaylst";
import classes from "./Player.module.css";

function Controls() {
  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    isActive,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
    handleLike,
  } = useContext(playerContext);

  const audio: React.LegacyRef<HTMLAudioElement | undefined> = useRef();

  // self State
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [modalView, setModalView] = useState(false);
  const [playlistView, setPlaylistView] = useState(false);

  const fmtMSS = (s: any) => {
    return (s - (s %= 60)) / 60 + (s > 9 ? ":" : ":0") + ~~s;
  };

  const toggleAudio = () => {
    if (audio.current) {
      return audio.current.paused
        ? audio.current.play()
        : audio.current.pause();
    }
  };

  const handleVolume = (q: any) => {
    setStateVolum(q);
    if (audio.current) {
      audio.current.volume = q;
    }
  };

  const toggleModal = () => {
    setModalView(!modalView);
  };

  const togglePlaylist = () => {
    setPlaylistView(!playlistView);
  };

  const handleProgress = (e: any) => {
    const compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    if (audio.current) {
      audio.current.currentTime = compute;
    }
  };

  useEffect(() => {
    if (audio.current) {
      audio.current.volume = statevolum;
    }
    if (playing) {
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong, songs]);

  let volumeIcon = <VolumeMuteIcon />;
  if (audio.current) {
    if (audio.current.volume > 0.5) {
      volumeIcon = <VolumeUpIcon />;
    } else if (audio.current.volume <= 0.5 && audio.current.volume > 0) {
      volumeIcon = <VolumeDownIcon />;
    } else {
      volumeIcon = volumeIcon;
    }
  }

  const currentPercentage = dur ? `${(currentTime / dur) * 100}%` : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #731bd8), color-stop(${currentPercentage}, #fff))
`;

  return (
    <>
      <div>
        {modalView && (
          <div className={classes.queued_songs_div}>
            <Queue />
          </div>
        )}
      </div>

      <div className={classes.controls_wrapper}>
        <div className={classes.controls}>
          <div className={classes.audio_hero}>
            <audio
              onTimeUpdate={(e: React.BaseSyntheticEvent) =>
                setCurrentTime(Number(e.currentTarget.currentTime))
              }
              onCanPlay={(e: React.BaseSyntheticEvent) =>
                setDur(Number(e.currentTarget.duration))
              }
              onEnded={handleEnd}
              ref={audio as React.LegacyRef<HTMLAudioElement>}
              preload="true"
              loop={repeat}
              src={songs[currentSong]?.preview}
            />
            <div className={classes.start}>
              <div className={classes.img}>
                {songs[currentSong]?.listenPic ? (
                  <img src={songs[currentSong]?.listenPic} alt="" />
                ) : (
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                )}
              </div>
              <div className={classes.songtext}>
                <p className={classes.song_title}>
                  {songs[currentSong]?.title}
                </p>
                <p className={classes.artistname}>
                  {songs[currentSong]?.trackArtist}
                </p>
              </div>
              <div onClick={handleLike}>
                {!isActive ? (
                  <FavoriteBorderIcon
                    className={`${classes.bttn} ${classes.fav_bttn}`}
                  />
                ) : (
                  <FavoriteIcon
                    className={`${classes.bttn} ${classes.fav_bttn} ${classes.fav_bttn_like}`}
                  />
                )}
              </div>
              {playlistView && <UserPlaylist />}
              <div onClick={togglePlaylist} className={classes.addIcon_div}>
                <AddIcon className={classes.bttn} />
              </div>
            </div>
          </div>
          <div className={classes.middle}>
            <div className={classes.controllers}>
              <div onClick={toggleRandom} className={classes.shuffle_bttn}>
                <ShuffleIcon
                  className={
                    random
                      ? `${classes.bttn__green} ${classes.margin}`
                      : `${classes.bttn} ${classes.margin}`
                  }
                />
              </div>
              <div className={classes.prev} onClick={prevSong}>
                <SkipPreviousIcon
                  className={`${classes.bttn} ${classes.margin}`}
                />
              </div>
              <div
                className={classes.play}
                onClick={() => {
                  togglePlaying();
                  toggleAudio();
                }}
              >
                {!playing ? (
                  <PlayCircleOutlineIcon
                    className={`${classes.bttn}  ${classes.margin}`}
                  />
                ) : (
                  <PauseCircleOutlineIcon
                    className={`${classes.bttn}  ${classes.margin}`}
                  />
                )}
              </div>

              <div className={classes.next} onClick={nextSong}>
                <SkipNextIcon
                  className={`${classes.bttn}  ${classes.margin}`}
                />
              </div>
              <div onClick={toggleRepeat} className={classes.repeat_bttn}>
                <RepeatIcon
                  className={
                    repeat ? `${classes.bttn__green}` : `${classes.bttn}`
                  }
                />
              </div>
            </div>
            <div className={classes.progressbar}>
              <div className={classes.currentTime}>{fmtMSS(currentTime)}</div>
              <input
                className={`${classes.playerInput} ${classes.input}`}
                onChange={handleProgress}
                value={dur ? (currentTime * 100) / dur : 0}
                type="range"
                name="progresBar"
                id="prgbar"
                style={{ background: trackStyling, width: "100%" }}
              />
              <div className={classes.totalTime}>{fmtMSS(dur)}</div>
            </div>
          </div>
          <div className={classes.end}>
            <div className={classes.volum}>
              <div className={classes.icons}>{volumeIcon}</div>
              <div className={classes.icons}>
                <input
                  className={classes.input}
                  value={Math.round(statevolum * 100)}
                  type="range"
                  name="volBar"
                  id="volBar"
                  onChange={(e) => handleVolume(Number(e.target.value) / 100)}
                />
              </div>
            </div>

            <div className={classes.playlist_bttn} onClick={toggleModal}>
              <PlaylistPlayIcon className={classes.bttn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Controls;
