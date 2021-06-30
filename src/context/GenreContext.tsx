import React, { createContext , useState, useEffect}  from 'react';
import {  AxiosRequestConfig } from "axios";
import axios from '../utils/AxiosInterceptor'

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
  const [error, setError] = useState('')
  const getOneGenre = async (id: any) => {
   try {
    const { data } = await axios.get(
     `${baseUrl}/music/genres/${id}`
    );
    return data.data[0].name
   } catch (error) {
    setError('An error occurred')
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
    } catch (error) {
      setError('An error occurred')
    }
  };

  const  getAllGenres= async() => {
    try{
      const res: any = await axios.get(
       `${baseUrl}/music/genres`
      );
      setGenres(res.data.data)
    }catch(error){
      setError("An error occurred");
    }
  }
  
  const getArtistRelatedGenres = async (id:number) =>{
    try{
      const {data} = await axios.get(`${baseUrl}/genre/artist/${id}`)
      setArtists(data.data)
      setTrimmedArtists(data.data.slice(0,6))
    }
    catch(error){
      setError("An error occurred");
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
      setError("An error occurred");
    }
  }

  const getOnePlaylist= async (id:string)=>{
    try {
      const res = await axios.get(`${baseUrl}/playlist/get/${id}`);
      setPlaylistSongs(res.data.data.songs)
    } catch (error) {
      setError("An error occurred");
    }
  }

  const getArtistDetails = async (query:string) =>{
    try {
      const res = await axios.get(`${baseUrl}/artistdetails/${query}`);
      setArtistAlbums(res.data.albums)
      setArtistSongs(res.data.songs)
    } catch (error) {
      setError("An error occurred");
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
    trimmedPlaylists,
    error
  };
  // const login = async () => {
   
  //   const {data} = await axios.post(
  //    `${baseUrl}/music/signIn`,
  //    { email: "akinloludavid@mail.com", password: "password2929" }
  //   );
  //   const token =data.token
  //   localStorage.setItem('token', token)
  // }
  useEffect(()=>{
    console.log(error)
    
  },[])

  return ( 
    <GenreContext.Provider value = {values}>
      {children}
    </GenreContext.Provider>
   );
}
 
export default GenreContextProvider;