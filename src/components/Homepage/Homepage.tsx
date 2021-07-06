import Navigationbar from "./Navbar/Navbar";
import Flow from "./Flow/Flow";
import RecentActivity from "./RecentActivity/RecentActivity";
import axios from "axios";
import image from './BG.png';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import Genres from "./Genres/Genres";
import './Homepage.css';
import ArtistsYouMayLike from "./ArtistsYouMayLike/ArtistsYouMayLike";

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
  const [recentlyPlayed, setRecentlyPlayed] = useState({} as recentPlay);
  const [loading, setLoading] = useState(false);


  // const userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
  // token = userInfo.token;
  // firstName = userInfo.user.firstName;
  // lastName = userInfo.user.lastName;

  // localStorage.setItem("Token", token);
  // localStorage.setItem("lastName", lastName);
  // localStorage.setItem("firstName", firstName);
  

  const getRecentlyPlayed = async () => {
    try {
      const token = localStorage.getItem("Token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        "https://music-box-a.herokuapp.com/playlist/getRecentlyPlayed",
        config
      );
      setRecentlyPlayed(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecentlyPlayed();

    return () => {
      console.log("hello");
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="App">
          <ClipLoader size={50} color={"#DEDFDF"} loading={loading} />
        </div>
      ) : (
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
          <Genres />
          <ArtistsYouMayLike />
        </div>
      )}
    </>
  );
}
