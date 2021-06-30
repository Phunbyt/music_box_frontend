import Navigationbar from '../components/Navbar/Navbar';
import Flow from '../components/Flow/Flow';
import RecentActivity from '../components/RecentActivity/RecentActivity'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Genres from '../components/Genres/Genres'
import ArtistsYouMayLike from '../components/ArtistsYouMayLike/ArtistsYouMayLike';
import './Homepage.css';
import image from './BG.png';


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

    const [recentlyPlayed, setRecentlyPlayed] = useState({} as recentPlay)
    const [genres, setGenres] = useState([] as Record<string, any>)
   

    let token;
    let userId;
    let firstName;
    let lastName;
    const callApi = async () => {
    try {
      const { data } = await axios.post(
        "https://music-box-a.herokuapp.com/music/signIn",
        { email: "bmubarak88@gmail.com", password: "decagon" }
      );
    token = data.token;
    userId = data.user._id;
    firstName = data.user.firstName;
    lastName = data.user.lastName;
    
    localStorage.setItem("Token", token);
    localStorage.setItem("UserId", userId);
    localStorage.setItem("lastName", lastName)
    localStorage.setItem("firstName", firstName)
    } catch (err) {
      console.log(err);
    }
  };

    const getRecentlyPlayed = async () => {
        try {
            const {user} = JSON.parse(localStorage.getItem("userInfo") as string);
            const token = user.token
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

    useEffect(() => {
        
        getRecentlyPlayed();

        return () => {
        console.log("hello");
        };
    }, []);

    
    return (
        <div>
            <div className='nav-bar'>
            <Navigationbar />
            </div>
            <div className='home'>
                <h1>Home</h1>
            </div>
            <div className='flow'>
                <Flow />
            </div>
            <RecentActivity value={recentlyPlayed} />
            <Genres/>
            <ArtistsYouMayLike />
        </div>
    )
}
