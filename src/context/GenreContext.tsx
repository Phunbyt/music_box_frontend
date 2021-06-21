import React, { createContext , useState, useEffect}  from 'react';
import { genresData } from '../fakeapi';
import {  AxiosRequestConfig } from "axios";
import axios from '../utils/AxiosInterceptor'

export interface Props {
  
 
}


export const GenreContext = createContext({} as Props)

const GenreContextProvider = ({children}:any) => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearch] = useState([])
  const [artists, setArtists] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [playlistsongs, setPlaylistSongs] = useState([])
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
      const res: any = await axios.get(
       "https://music-box-a.herokuapp.com/music/genres"
      );
      setGenres(res.data.data)

    }catch(error){
      console.log(error.message)
    }
  }

  const getMusicRelatedGenres = async (id:number) =>{
    try{
      const {data} = await axios.get(`https://music-box-a.herokuapp.com/genre/artist/${id}`)
      setArtists(data.data)
    }
    catch(error){
      console.log(error.message)
    }
  }
  const getPlaylistRelatedGenres = async (id:number)=>{
    try{
      const { data } = await axios.get(
       `https://music-box-a.herokuapp.com/genre/playlist/${id}`
      );
      setPlaylists(data.data)

    }catch(error){
      console.log(error.message)
    }
  }

  const getOnePlaylist= async (id:string)=>{
    try {
      const res = await axios.get(`https://music-box-a.herokuapp.com/playlist/get/${id}`);
      setPlaylistSongs(res.data.data.songs)
      console.log(res.data.data.songs)
    } catch (error) {
      console.log(error.message)
    }
  }
  const values: Record<string, any> = {
    genres,
    getAllGenres,
    searchResults,
    getSearch,
    getMusicRelatedGenres,
    artists,
    getPlaylistRelatedGenres,
    playlists,
    getOnePlaylist,
    playlistsongs

  };
  const login = async () => {
   
    const {data} = await axios.post(
     "https://music-box-a.herokuapp.com/music/signIn",
     { email: "akinloludavid@mail.com", password: "password2929" }
    );
    const token =data.token
    localStorage.setItem('token', token)
  }
  useEffect(()=>{
    login()
    getMusicRelatedGenres(132)
  },[])

  return ( 
    <GenreContext.Provider value = {values}>
      {children}
    </GenreContext.Provider>
   );
}
 
export default GenreContextProvider;