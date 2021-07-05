import "./Flow.css";
import { useContext, useState, useEffect } from "react";

import axios from 'axios'
import playerContext from "../../../Contexts/playerContext";
import Controls from "../../Player/controls";

interface Props{

}
export default function Flow() {
  const { handleClick } = useContext(playerContext)
  const [songs, setSongs] = useState([] as Record<string, any>[])
  
  async function fetchPlay(){
    const token = localStorage.getItem("Token");
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const {data: {data}} = await axios.get("https://music-box-a.herokuapp.com/listeninghistory", config)
    setSongs(data)
  }
  useEffect(() => {
    fetchPlay();
  },[])
  return (
    <>
    <div className="flow">
      <div className="top">
        <p className="recently">Flow</p>
        <p>
          <i className="dots fa fa-ellipsis-h" />
        </p>
      </div>
      {songs && songs[songs.length - 1] && <div className="card"><img src={songs[songs.length-1].listenPic} alt="pic" style={{width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.2)', filter: 'blur(1px)'}}/>
        <div className="flow-front-image"><img className="flow-front-image-image" src={songs[songs.length-1].listenPic} alt="pic"/></div>
        {songs && <div className="flow-image" onClick={() => handleClick(songs, songs.length-1)}>
          <i className="play fa fa-play-circle" />
        </div>}
      </div>}
    </div>
    <Controls/>
    </>
  );
}
