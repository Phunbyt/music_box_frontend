import Navigationbar from './Navbar/Navbar';
import Flow from './Flow/Flow';
import RecentActivity from './RecentActivity/RecentActivity'
import axios from 'axios';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Genres from './Genres/Genres'


export interface property {
    artist?: Record<string, any>[];
    album?: Record<string, any>[];
    playlist?: Record<string, any>[];
    allData?: Record<string, any>[];
}

export interface recentPlay {
    playlist?: Record<string, any>[];
    albums?: Record<string, any>[];
    artist?: Record<string, any>[];
}

export default function Homepage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [recentlyPlayed, setRecentlyPlayed] = useState({} as recentPlay)
    const [genres, setGenres] = useState([] as Record<string, any>)
   

    let token;
    let userId
    const callApi = async () => {
    try {
      const { data } = await axios.post(
        "https://music-box-a.herokuapp.com/music/signIn",
        { email: "bmubarak88@gmail.com", password: "decagon" }
      );
    token = data.token;
    userId = data.user._id;
    setFirstName(data.user.firstName);
    setLastName(data.user.lastName)
    
    localStorage.setItem("Token", token);
    localStorage.setItem("UserId", userId);
    } catch (err) {
      console.log(err);
    }
  };

    const getRecentlyPlayed = async () => {
        try {
            const token = localStorage.getItem("Token");
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            };
            const { data } = await axios.get("https://music-box-a.herokuapp.com/playlist/getRecentlyPlayed", config);
            setRecentlyPlayed(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getGenres = async () => {
        try {
            const token = localStorage.getItem("Token");
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            };
            const { data: {data} } = await axios.get(
              "https://music-box-a.herokuapp.com/music/genres",
              config
            );
            setGenres(data);
        }
        catch (error) {
            
        }
    }

    useEffect(() => {
        callApi();
        getRecentlyPlayed();
        getGenres();

        return () => {
        console.log("hello");
        };
    }, []);

    
    return (
        <div>
            <Navigationbar firstName={firstName} lastName={lastName}/>
            <Flow />
            <RecentActivity value={recentlyPlayed} />
            <Genres genres={genres}/>
        </div>
    )
}
