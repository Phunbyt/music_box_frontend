import "./Flow.css";
import { FaEllipsisH, FaPlay, FaPlayCircle, FaPlusCircle } from "react-icons/fa";
import flowcover from './flowcover.png';
import flowcoverTwo from "./flowcover2.png";
import React, { useContext, useState, useEffect } from "react";

import axios from 'axios'
import playerContext from "../../../Contexts/playerContext";

interface Props{

}
export default function Flow() {
  const { handleClick } = useContext(playerContext)
  const [songs, setSongs] = useState([] as Record<string, any>[])
  useEffect(() => {
axios.get("https://music-box-a.herokuapp.com/listeninghistory").then((res) => {
  console.log(res, "resssssssssssssssss");
  setSongs(res.data);
  console.log(res.data);
});
  },[])
  return (
    <div className="flow">
      <div className="top">
        <p className="recently">Flow</p>
        <p>
          <i className="dots fa fa-ellipsis-h" />
        </p>
      </div>
      <div className="card">
        <div className="front-image"></div>
        <div className="image" onClick={() => handleClick(songs, songs.length-1)}>
          <i className="play fa fa-play-circle" />
        </div>
      </div>
    </div>
  );
}
