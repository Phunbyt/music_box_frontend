import React, { useState, useEffect, useRef } from "react";
import "./LibraryPlaylists.css";
import axios from "axios";
import imgPics from "../../../asset/img/Morning Run.png";
import { FaPlus } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import CreatePlaylistModal from "../../../components/LibraryComponents/CreatePlaylistModal/CreatePlaylistModal";
import Toast from "../../../components/LibraryComponents/CreatePlaylistModal/toast";
import LibraryDropdown from "../../../components/LibraryComponents/LibraryDropdown/LibraryDropdown";

let initialState: any[];



export default function LibraryPlaylists() {
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState([] as any[]);
  const [getGenres, setGetGenres] = useState([] as any[]);

  const [field, setField] = useState({
    modal: false,
    toast: "",
  });

  const [nameInfo, setNameInfo] = useState("");
  const [categoryInfo, setCategoryInfo] = useState("");
  const [genreInfo, setGenreInfo] = useState("");

  interface Info {
    name: string;
    category: string;
    genre: string;
    songs?: [];
  }

  const playlistRef: any = useRef();
  const genreRef: any = useRef()



  const createPlaylist = (e: any) => {
    e.preventDefault();
    const category: string = playlistRef.current.value;
    const genres: string = genreRef.current.value;

    const data: Info = {
      name: nameInfo,
      category: category,
      genre: genres,
      songs: [],
    };
    
    const token = localStorage.getItem("Token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post("https://music-box-a.herokuapp.com/playlist/create", data, config)
      .then((response) => console.log(response))
      .catch();

    setField({
      ...field,
      modal: false,
      toast: "Your Playlist was created successfully.",
    });
    fetchAll()
    setTimeout(
      () =>
        setField({
          ...field,
          modal: false,
          toast: "",
        }),
      2000
    );
    setNameInfo("");
    setCategoryInfo("");
    setGenreInfo("");
    
  };


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
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data: {data} } = await axios.get(
        `https://music-box-a.herokuapp.com/playlists/`,
        config
      );
      initialState = [...data].reverse();
      setPlaylist([...initialState]);

      const info = await axios.get(`https://music-box-a.herokuapp.com/music/genres`, config);
      setGetGenres([...info.data.data])
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
    fetchAll();
  }, []);
  const noOfSong = (item: number) => {
    return item > 1 ? "songs" : "song";
  };

  const filter = (order: string) => {
    if (order === "Date Added") {
      setPlaylist([...initialState]);
    } else if (order === "A-Z") {
      const newPlaylist = playlist.sort(
        (a: any, b: any) => a.name[0].charCodeAt(0) - b.name[0].charCodeAt(0)
      );
      setPlaylist([...newPlaylist]);

    } else if (order === "Number of songs") {
      const sortedPlaylist = playlist.sort(
        (a: any, b: any) => b.songs.length - a.songs.length
      );
      setPlaylist([...sortedPlaylist]);
    }
  };
  return (
    <>
      <CreatePlaylistModal
        show={field.modal}
        close={() => {
          setField({ ...field, modal: false });
        }}
      >
        {
          <form className="form" onSubmit={createPlaylist}>
            <div className="modalHeader">Create new playlist</div>
            <div className="contentWrap">
              <input
                type="text"
                placeholder="Title"
                className="title"
                required
                value={nameInfo}
                onChange={(e) => setNameInfo(e.target.value)}
              />
              <div className="description">
                <span>Write a description</span>
                <span>0/200</span>
              </div>
              <textarea maxLength={200} className="textArea" />
              <div className="genreCat">
                <span>
                  <label>Genres</label>
                  <br />
                  <select
                    className="genreCategory" 
                    onChange={(e) => setGenreInfo(e.target.value)}
                    value={genreInfo}
                    ref={genreRef}
                  >
                    {getGenres.map((item: Record<string, any>) => (
                      <option key={item._id} value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </span>
                <span>
                  <label>Category</label>
                  <br />
                  <select
                    className="genreCategory"
                    onChange={(e) => setCategoryInfo(e.target.value)}
                    value={categoryInfo}
                    ref={playlistRef}
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </span>
              </div>
              <br />
              <span className="btnContainer">
                <button
                  className="cancelBtn"
                  onClick={() => {
                    setField({ ...field, modal: false });
                  }}
                >
                  CANCEL
                </button>
                <button type="submit" className="createBtn">
                  CREATE
                </button>
              </span>
            </div>
          </form>
        }
      </CreatePlaylistModal>
      <Toast toast={field.toast} close={null} />

      {loading ? (
        <div className="App">
          <ClipLoader size={50} color={"#DEDFDF"} loading={loading} />
        </div>
      ) : (
        <div>
          <div className="playlistHeader">
            <p className="playlistName">My playlists</p>

            <LibraryDropdown filter={filter} />
          </div>
          <div className="main">
            <div className="playlistContainer">
              <div
                className="iconContainer"
                onClick={() => {
                  setField({ ...field, modal: true });
                }}
              >
                <div className="addIcon">
                  <FaPlus className="icon" />
                </div>
                <div>Create Playlist</div>
              </div>
            </div>
            {playlist &&
              playlist.map((item: Record<string, any>) => (
                <div className="playlist" key={item._id}>
                  {getGenres.map((element: Record<string, any>) => {
                    if (item.genre === element.name){
                      return  <img src={element.picture_big ? element.picture_big : imgPics} alt="my pics" className="pContainer" key={element._id} />
                    }
                  })}
                  <span>{item.name}</span>
                  <span style={{ color: "gray" }}>
                    {item.songs.length} {noOfSong(item.songs.length)}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

