import { useState, useEffect, useContext } from "react";
import AlbumTop from './components/AlbumComponents/AlbumTop'
import AlbumSideTop from './components/AlbumComponents/AlbumSideTop'
import AlbumSideTableHeader from './components/AlbumComponents/AlbumSideTableHeader'
import AlbumSideTableSongs from './components/AlbumComponents/AlbumSideTableSongs'
import AlbumMore from './components/AlbumComponents/AlbumMore'
import Mobile from './components/AlbumComponents/Mobile/Mobile'
import axios, { AxiosRequestConfig } from 'axios'
import styles from './Album.module.css'
import {useParams} from 'react-router-dom'
import playerContext from "./Contexts/playerContext";
import Controls from "./components/Player/controls";

const Album = () => {
    const {albumid}:any = useParams()
    const [albumImage, setAlbumImage] =useState('')
    const [albumTitle, setAlbumTitle] = useState('')
    const [albumArtist, setAlbumArtist] =useState('')
    const [albumArtistId, setAlbumArtistId] = useState('')
    const [loading, setLoading] = useState(true)
    const [albumTracksDetails, setAlbumTracksDetails] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [albumTracks, setAlbumTracks] = useState([])
    const [artistAlbumsMore, setArtistAlbumMore] = useState([])
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
      const userAlbum = async () => {
        const tokenValue = localStorage.getItem('Token');
        const config:AxiosRequestConfig = {
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        };
        try {
          const album = await axios.get(
            `https://music-box-a.herokuapp.com/album/getOneAlbum/${albumid}`,
            config
          );
          
          let albumDetails = album.data.data.albumData
          console.log(albumDetails)
          setAlbumImage(albumDetails.cover)
          setAlbumTitle(albumDetails.title)
          setAlbumArtist(albumDetails.artist.name)
          setAlbumArtistId(albumDetails.artist.id)
          setAlbumTracks(albumDetails.tracks.data)
          setSongs(albumDetails.tracks.data);

          const albumNumofTracks = `${albumDetails.nb_tracks} songs`
          let tracksMinutes = 0;
          albumDetails.tracks.data.forEach((track: Record<string, any>) => {
              let tracksDuration = String(track.duration);
              tracksMinutes += Number(tracksDuration[0])
              tracksMinutes += Math.floor(Number(tracksDuration.slice(1))/60)
          })
          const albumDuration = (`${Math.floor(tracksMinutes/60)}hrs ${tracksMinutes % 60}`)
          const albumNumofTracksandTime = `${albumNumofTracks}, ${albumDuration}`
          setAlbumTracksDetails(`${albumNumofTracksandTime}`)
          const date = albumDetails.release_date;
          let reg1 = /-/g
          const reg2 = /\//g
          const newDate = date.replace(reg1, "/")
          let dateInFormat = new Date(newDate).toLocaleString('en-us').split(',')[0].replace(reg2, ".")
          const albumReleaseDate = `RELEASE DATE: ${dateInFormat}`
          setReleaseDate(albumReleaseDate)
          setLoading(false)
        } catch (err) {
          console.log(err);
        }
      };
      const artistAlbums = async () =>{
          try {
            const tokenValue = localStorage.getItem('Token');
            const config:AxiosRequestConfig = {
              headers: {
                Authorization: `Bearer ${tokenValue}`,
              },
            };
              const albums = await axios.get(
                `https://music-box-a.herokuapp.com/album/getartistalbums/${albumArtistId}`,
                config
              );
              console.log(albums.data.data.artistAlbumsData)
              setArtistAlbumMore(albums.data.data.artistAlbumsData)
          } catch (error) {
              console.log(error)
          }
      }
      
      useEffect(() => {
         // callApi();
          userAlbum();
      }, []);
      useEffect(() => {
            artistAlbums();
      }, [albumArtistId]) //eslint-disable-line react-hooks/exhaustive-deps

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
        <div className={styles.album}>
          <div className={styles.web}>
            <AlbumTop
              image={albumImage}
              title={albumTitle}
              artist={albumArtist}
              trackDetails={albumTracksDetails}
              releaseDate={releaseDate}
            />
            <AlbumSideTop toggleDisplay={collapseTableHandler} />
            <div style={{ display: `${displayTable}` }}>
              <AlbumSideTableHeader />
              {!loading
                ? albumTracks.map((track: Record<string, any>, index) => (
                    <AlbumSideTableSongs
                      click={() => handleClick(songs, index)}
                      key={track.title}
                      num={index + 1}
                      title={track.title}
                      artist={track.artist.name}
                      time={
                        String(track.duration)[0] +
                        ":" +
                        String(track.duration).slice(1)
                      }
                    />
                  ))
                : null}
              <AlbumMore albumArtist={albumArtist} albums={artistAlbumsMore} />
            </div>
          </div>
          <Mobile
            image={albumImage}
            title={albumTitle}
            artist={albumArtist}
            trackDetails={albumTracksDetails}
            releaseDate={releaseDate}
            tracks={albumTracks}
            status={loading}
            albumArtist={albumArtist}
            albums={artistAlbumsMore}
          />
        </div>
        <Controls />
      </>
    );
}

export default Album