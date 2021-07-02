import React, { createContext , useState, useEffect}  from 'react';
import axios, {  AxiosRequestConfig } from "axios";
// import axios from '../utils/AxiosInterceptor'

export interface Props {
  
 
}
const baseUrl = 'https://music-box-a.herokuapp.com'

export const GenreContext = createContext({} as Props)

const GenreContextProvider = ({children}:any) => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearch] = useState([])
  const [artists, setArtists] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [playlistsongs, setPlaylistSongs] = useState([])
  const [artistSongs, setArtistSongs] = useState([])
  const [artistAlbums, setArtistAlbums]  = useState([])
  const [trimmedArtists, setTrimmedArtists] = useState([])
  const [trimmedPlaylists, setTrimmedPlaylists] = useState([])
  const getOneGenre = async (id: any) => {

   try {
     const token = localStorage.getItem("Token");
     const config = {
      headers: {
       Authorization: `Bearer ${token}`,
      },
     };
    const { data } = await axios.get(
     `${baseUrl}/music/genres/${id}`, config
    );
    return data.data[0].name
   } catch (error) {
    console.log(error.message);
   }
  };

  const getSearch = async (query:string) => {
    try {
      const options: AxiosRequestConfig = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: query },
      headers: {
        "x-rapidapi-key": "a44c1ad304mshf129460914513c3p1d2e6cjsne05b1b9d436c",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
      };
      const res = await axios.request(options);

      setSearch(res.data.data);
      console.log(searchResults)
    } catch (error) {
      console.log(error.message)
    }
  };

  const  getAllGenres= async() => {
    try{
      const token = localStorage.getItem("Token");
      const config = {
       headers: {
        Authorization: `Bearer ${token}`,
       },
      };
      const res: any = await axios.get(
       `${baseUrl}/music/genres`, config
      );
      setGenres(res.data.data)
    }catch(error){
      console.log(error.message)
    }
  }
  
  const getArtistRelatedGenres = async (id:number) =>{
    try{
      const token = localStorage.getItem("Token");
      const config = {
       headers: {
        Authorization: `Bearer ${token}`,
       },
      };
      const {data} = await axios.get(`${baseUrl}/genre/artist/${id}`, config)
      setArtists(data.data)
      setTrimmedArtists(data.data.slice(0,6))
    }
    catch(error){
      console.log(error.message)
    }
  }
  const getPlaylistRelatedGenres = async (id:number)=>{
    try{
      const { data } = await axios.get(
       `${baseUrl}/genre/playlist/${id}`
      );
      setPlaylists(data.data)
      setTrimmedPlaylists(data.data.slice(0, 6));

    }catch(error){
      console.log(error.message)
    }
  }

  const getOnePlaylist= async (id:string)=>{
    try {
      const token = localStorage.getItem("Token");
      const config = {
       headers: {
        Authorization: `Bearer ${token}`,
       },
      };
      const res = await axios.get(`${baseUrl}/playlist/get/${id}`, config);
      setPlaylistSongs(res.data.data.songs)
      console.log(res.data.data.songs)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getArtistDetails = async (query:string) =>{
    try {
      const token = localStorage.getItem("Token");
      const config = {
       headers: {
        Authorization: `Bearer ${token}`,
       },
      };
      const res = await axios.get(`${baseUrl}/artistdetails/${query}`, config);
      setArtistAlbums(res.data.albums)
      setArtistSongs(res.data.songs)
    } catch (error) {
      console.log(error.message)
    }
  }
  const trimArray = (arr:[])=>{
    return arr.slice(0,6)
  }
  const values: Record<string, any> = {
    genres,
    getAllGenres,
    searchResults,
    getSearch,
    getArtistRelatedGenres,
    artists,
    getPlaylistRelatedGenres,
    playlists,
    getOnePlaylist,
    playlistsongs,
    getOneGenre,
    getArtistDetails,
    artistSongs,
    artistAlbums,
    trimArray,
    trimmedArtists,
    trimmedPlaylists
  };


  return ( 
    <GenreContext.Provider value = {values}>
      {children}
    </GenreContext.Provider>
   );
}
 
export default GenreContextProvider;