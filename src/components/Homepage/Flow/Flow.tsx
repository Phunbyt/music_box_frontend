import "./Flow.css";
import { FaEllipsisH, FaPlay, FaPlayCircle, FaPlusCircle } from "react-icons/fa";
import flowcover from './flowcover.png';
import flowcoverTwo from "./flowcover2.png";
import React from "react";

interface Props{

}
export default function Flow() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="top my-4">
                  <p className="float-start text-white">Flow</p>
                  <p className="float-end text-white">
                    <FaEllipsisH
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderRadius: "50%",
                        fontSize: "20px",
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col">
                <div
                  className="card m-2 m-lg-0"
                  style={{
                    height: "200px",
                    width: "100%",
                    position: "relative",
                    background: `url(${flowcoverTwo})`,
                    backgroundSize: "cover",
                  }}
                >
                  <span
                    style={{
                      background: `url(${flowcover})`,
                      height: "100px",
                      width: "100px",
                      position: "absolute",
                      left: "20px",
                      top: "55px",
                    }}
                  ></span>
                  <FaPlayCircle
                    style={{
                      cursor: "pointer",
                      color: "#1C1C1C",
                      borderRadius: "50%",
                      fontSize: "40px",
                      position: "absolute",
                      top: "134px",
                      left: "50px",
                      background: "#FFFFFF",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4 col">
                <div
                  className="card m-2 m-lg-0"
                  style={{
                    height: "200px",
                    width: "100%",
                    background: `url(${flowcover})`,
                    backgroundSize: "cover",
                  }}
                >
                  <span
                    style={{
                      background: `url(${flowcoverTwo})`,
                      height: "100px",
                      width: "100px",
                      position: "absolute",
                      left: "20px",
                      top: "55px",
                    }}
                  ></span>
                  <FaPlusCircle
                    style={{
                      cursor: "pointer",
                      color: "#1C1C1C",
                      borderRadius: "50%",
                      fontSize: "40px",
                      position: "absolute",
                      top: "134px",
                      left: "50px",
                      background: "#FFFFFF",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4 col">
                <div
                  className="card m-2 m-lg-0"
                  style={{
                    height: "200px",
                    width: "100%",
                    background: `url(${flowcoverTwo})`,
                    backgroundSize: "cover",
                  }}
                >
                  <span
                    style={{
                      background: `url(${flowcover})`,
                      height: "100px",
                      width: "100px",
                      position: "absolute",
                      left: "20px",
                      top: "55px",
                    }}
                  ></span>
                  <FaPlusCircle
                    style={{
                      cursor: "pointer",
                      color: "#1C1C1C",
                      borderRadius: "50%",
                      fontSize: "40px",
                      position: "absolute",
                      top: "134px",
                      left: "50px",
                      background: "#FFFFFF",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
