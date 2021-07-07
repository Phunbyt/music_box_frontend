
import axios, { AxiosRequestConfig } from 'axios'
import { useState, useEffect, useContext } from "react";
import PublicPlaylistTop from './components/PublicPlaylistComponents/PublicPlaylistTop'
import TracksTableControls from './components/PublicPlaylistComponents/TracksControls'
import TracksTableHeader from './components/PublicPlaylistComponents/TracksTableHeader'
import TracksTableBody from './components/PublicPlaylistComponents/TracksTableBody'
import FeaturedArtistTop from './components/PublicPlaylistComponents/FeaturedArtistTop'
import FeaturedArtist from './components/PublicPlaylistComponents/FeaturedArtist'
import Mobile from './components/PublicPlaylistComponents/Mobile/Mobile'
import {useParams} from 'react-router-dom'
import styles from './PublicPlaylist.module.css'
import playerContext from "./Contexts/playerContext";
import Controls from "./components/Player/controls";


const PublicPlaylist = () => {
    const {publicplaylistid}:any = useParams()
    const [playlistName, setPlaylistName] = useState("");
    const [playlistFollowers, setPlaylistFollowers] = useState("");
    const [playlistDuratioAndSongsNum, setPlaylistDurationAndSongsNum] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');
    const [playlistSongs, setPlaylistSongs] = useState([]);
    const [loading, setLoading] = useState(true);
  const [displayTable, setDisplayTable] = useState('block')
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
            `https://music-box-a.herokuapp.com/playlist/get/${publicplaylistid}`,
            config
          );
          
          console.log(playlist.data.data)
          const playlistDetails = playlist.data.data
          setPlaylistName(playlistDetails.name)
          setPlaylistDescription(playlistDetails.genre)
          setPlaylistFollowers(`${playlistDetails.likesCount} FOLLOWERS`)
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
          setSongs(playlistDetails.songs);
          setLoading(false)
        } catch (err) {
          console.log(err);
        }
      };
      
      useEffect(() => {
          // callApi();
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
    return (
      <>
        <div className={styles.publicPlaylist}>
          <div className={styles.web}>
            <PublicPlaylistTop
              name={playlistName}
              description={playlistDescription}
              songsAndDuration={playlistDuratioAndSongsNum}
              followers={playlistFollowers}
            />
            <TracksTableControls toggleDisplay={collapseTableHandler} />
            <div style={{ display: `${displayTable}` }}>
              <TracksTableHeader />
              {!loading
                ? playlistSongs.map((song: Record<string, any>, index) => (
                    <TracksTableBody
                      click={() => handleClick(songs, index)}
                      num={index + 1}
                      title={song.trackTitle}
                      image={song.listenPic}
                      artist={song.trackArtist}
                      album={song.trackAlbum}
                      time={`${String(song.duration)[0]}:${String(
                        song.duration
                      ).slice(1)}`}
                      key={`${song.trackTitle} ${song.trackArtist}`}
                    />
                  ))
                : null}
            </div>
            <FeaturedArtistTop />
            {!loading ? <FeaturedArtist songs={playlistSongs} /> : null}
          </div>
          <Mobile
            name={playlistName}
            description={playlistDescription}
            songsAndDuration={playlistDuratioAndSongsNum}
            followers={playlistFollowers}
            tracks={playlistSongs}
            status={loading}
          />
        </div>
        <Controls />
      </>
    );
}

export default PublicPlaylist