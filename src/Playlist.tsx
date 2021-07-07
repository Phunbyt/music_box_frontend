import axios, { AxiosRequestConfig } from 'axios'
import { useState, useEffect, useContext } from "react";
import PlaylistTop from './components/PlaylistComponents/PlaylistTop'
import TrackTableControls from './components/PlaylistComponents/TrackTableControls'
import TracksTableHeader from './components/PlaylistComponents/TracksTableHeader'
import TracksTable from './components/PlaylistComponents/TracksTable'
import RefreshTop from './components/PlaylistComponents/RefreshTop'
import RefreshTableHeader from './components/PlaylistComponents/RefreshTableHeader'
// import RefreshTable from './Components/PlaylistComponents/RefreshTable'
import Mobile from './components/PlaylistComponents/Mobile/Mobile'
import styles from './Playlist.module.css'
import ModifyPlaylist from './components/PlaylistComponents/ModifyPlaylist'
import {useParams} from 'react-router-dom'
import playerContext from './Contexts/playerContext';
import Controls from './components/Player/controls';


const Playlists = () => {
  const {playlistid}:any = useParams()
    const [playlistName, setPlaylistName] = useState("");
    const [playlistCreatedAt, setPlaylistCreatedAt] = useState("");
    const [playlistDuratioAndSongsNum, setPlaylistDurationAndSongsNum] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('')
    const [playlistSongs, setPlaylistSongs] = useState([])
    const [loading, setLoading] = useState(true)
    const [displayTable, setDisplayTable] = useState('block')
  const [displayModifyPlaylist, setDisplayModifyPlaylist] = useState('none' as string)
  const { handleClick } = useContext(playerContext);
  const [songs, setSongs] = useState([] as Record<string, any>[]);
    // const callApi = async () => {
    //     try {
    //       const { data } = await axios.post('https://music-box-a.herokuapp.com/music/signIn', {
    //         email:  "madarauchiha@gmail.com",
    //         password: "12345678",
    //       });
    //       const token = data.token;
    //       localStorage.setItem('token', token);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
      const userPlaylist = async () => {
        const tokenValue = localStorage.getItem('Token');
        const config:AxiosRequestConfig = {
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        };
        try {
          const playlist = await axios.get(
            `https://music-box-a.herokuapp.com/playlist/get/${playlistid}`,
            config
          );
          
          console.log(playlist.data.data)
          const playlistDetails = playlist.data.data
          setPlaylistName(playlistDetails.name)
          setPlaylistDescription(playlistDetails.genre)
          setSongs(playlistDetails.songs);
          setPlaylistCreatedAt(`Created: ${new Date(playlistDetails.createdAt).toLocaleString('en-us').split(',')[0]}`)
          const numberOfSongs = playlistDetails.songs.length
          let songsMinutes = 0;
          playlistDetails.songs.forEach((song: Record<string, any>) => {
            let songsDuration = String(song.duration);
            songsMinutes += Number(songsDuration[0])
            songsMinutes += Math.floor(Number(songsDuration.slice(1))/60)
          })
          const playlistDuration = (`${Math.floor(songsMinutes/60)}hrs ${songsMinutes % 60} minutes`)
          setPlaylistDurationAndSongsNum(`${numberOfSongs} songs, ${playlistDuration}`)
          setPlaylistSongs(playlistDetails.songs)
          setLoading(false)
        } catch (err) {
          console.log(err);
        }
      };
      
      useEffect(() => {
        // callApi();  return handleClick(songs, songs.length - 1);
        userPlaylist();
      }, []);

      const collapseTableHandler = () => {
        if (displayTable === 'block') {
          setDisplayTable('none')
        }
        if (displayTable === 'none') {
          setDisplayTable('block')
        }
      }
      const collapseModifyPlaylistHandler = () => {
        if (displayModifyPlaylist === 'block') {
          setDisplayModifyPlaylist('none')
        }
        if (displayModifyPlaylist === 'none') {
          setDisplayModifyPlaylist('block')
        }
      }
    return (
      <>
        <div className={styles.playlist}>
          <div className={styles.web}>
            <PlaylistTop
              name={playlistName}
              description={playlistDescription}
              songsAndDuration={playlistDuratioAndSongsNum}
              createdAt={playlistCreatedAt}
              collapse={collapseModifyPlaylistHandler}
            />
            <ModifyPlaylist
              displayModifyPlaylist={displayModifyPlaylist}
              name={playlistName}
              tracks={playlistSongs}
              deleteTrack={setPlaylistSongs}
              playlistId={playlistid}
            />
            <TrackTableControls toggleDisplay={collapseTableHandler} />
            <div style={{ display: `${displayTable}` }}>
              <TracksTableHeader />
              {!loading
                ? playlistSongs.map((song: Record<string, any>, index) => (
                    <TracksTable
                      style={{
                        border: "1px solid red",
                      }}
                      click={() => handleClick(songs, index)}
                      key={song.trackTitle}
                      num={index + 1}
                      image={song.listenPic}
                      title={song.trackTitle}
                      artist={song.trackArtist}
                      album={song.trackAlbum}
                      time={`${String(song.duration)[0]}:${String(
                        song.duration
                      ).slice(1)}`}
                    />
                  ))
                : null}

              <RefreshTop />
              <RefreshTableHeader />
              {/* */}
            </div>
          </div>
          <Mobile
            name={playlistName}
            description={playlistDescription}
            songsAndDuration={playlistDuratioAndSongsNum}
            createdAt={playlistCreatedAt}
            tracks={playlistSongs}
            status={loading}
          />
        </div>
        <Controls />
      </>
    );
}

export default Playlists