import "./Flow.css";
import { FaEllipsisH, FaPlay, FaPlayCircle, FaPlusCircle } from "react-icons/fa";
import flowcover from './flowcover.png';
import flowcoverTwo from "./flowcover2.png";
import React from "react";

interface Props{

}
export default function Flow() {
  return (
    <div className="flow">
      <div className="top">
        <p className="recently">Flow</p>
        <p><i className="dots fa fa-ellipsis-h" /></p>
        </div>
      <div className="card">
        <div className="front-image"></div>
        <div className="image"><i className="play fa fa-play-circle"/></div>
      </div>
    </div>
  );
}
