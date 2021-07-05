import React, { useState, useEffect } from "react";
import "./LibraryArtists.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import LibraryDropdown from "../../../components/LibraryComponents/LibraryDropdown/LibraryDropdown";
import NavigationBar from "../../../components/Homepage/Navbar/Navbar";

let initialState: any[];

export default function LibraryPlaylists() {
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState([] as any);

  let token: string;
  let userId: string;
  const callApi = async () => {
    try {
      const { data } = await axios.post(
        "https://music-box-a.herokuapp.com/music/signIn",
        { email: "bmubarak88@gmail.com", password: "decagon" }
      );
      token = data.token;
      userId = data.user._id;
      localStorage.setItem("Token", token);
      localStorage.setItem("UserId", userId);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAll = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("Token");
      const userId = localStorage.getItem("UserId");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `https://music-box-a.herokuapp.com/artist/getAll`,
        config
      );

      const myLikes: Record<string, any>[] = [];

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[i].likes[j] === userId) {
            myLikes.push(data[i]);
          }
        }
      }
      initialState = [...myLikes].reverse();
      setPlaylist([...initialState]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
    fetchAll();
  }, []);
  const noOfAlbums = (item: number) => {
    return item > 1 ? "Albums" : "Album";
  };

  const filter = (order: string) => {
    if (order === "Date Added") {
      setPlaylist([...initialState]);
    } else if (order === "A-Z") {
      const newPlaylist = playlist.sort(
        (a: any, b: any) => a.artistName[0].charCodeAt(0) - b.artistName[0].charCodeAt(0)
      );
      setPlaylist([...newPlaylist]);
    } else if (order === "Number of songs") {
      const sortedPlaylist = playlist.sort(
        (a: any, b: any) => b.noOfAlbums - a.noOfAlbums
      );
      setPlaylist([...sortedPlaylist]);
    }
  };
  return (
    <>
    {
      loading ?

  <div className="App">
    <ClipLoader size={50} color={"#DEDFDF"} loading={loading} />
  </div>

      :

      <div>
        <NavigationBar />
        <div className="playlistHeader">
          <p className="playlistName">My Liked Artists</p>
          <LibraryDropdown filter={filter} />
        </div>
        <div className="main">
          {!playlist ? (
            <div
              style={{
                position: "absolute",
                left: "20",
                top: "15",
                backgroundColor: "white",
                color: "black",
              }}
            >
              The Artist Library is empty
            </div>
          ) : (
            playlist.map((item: Record<string, any>) => (
              <div className="playlist" key={item._id}>
                <img
                  src={item.pictureBig}
                  alt="my pics"
                  className="pContainer"
                />
                <span style={{ textTransform: "capitalize" }}>
                  {item.artistName}
                </span>
                <span style={{ color: "gray" }}>
                  {item.noOfAlbums} {noOfAlbums(item.noOfAlbums)}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    }
    </>
  );
}
