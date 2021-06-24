import React from "react";
import { FaHeart, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import hipHop from './hip-hop.png';
import Country from './Country.png';
import playlist from './dance-electro.png';
import rock from './rock.png';
import pop from './POP.png';
import indie from './Indie.png';


interface Props {
  genres: Record<string, any>
}

export default function Genres({genres}: Props) {
  return (
    <div className="main mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col-md-2">
                <div
                  className="card "
                  style={{
                    width: "100%",
                    height: "100px",
                    marginBottom: "10px",
                    background: `url(${hipHop}) center center no-repeat`,
                  }}
                ></div>
              </div>
              <div className="col-md-2">
                <div
                  className="card"
                  style={{
                    width: "100%",
                    height: "100px",
                    marginBottom: "10px",
                    background: `url(${Country}) center center no-repeat`,
                  }}
                ></div>
              </div>
              <div className="col-md-2">
                <div
                  className="card"
                  style={{
                    width: "100%",
                    height: "100px",
                    marginBottom: "10px",
                    background: `url(${playlist}) center center no-repeat`,
                  }}
                ></div>
              </div>
              <div className="col-md-2">
                <div
                  className="card"
                  style={{
                    width: "100%",
                    height: "100px",
                    marginBottom: "10px",
                    background: `url(${rock}) center center no-repeat`,
                  }}
                ></div>
              </div>
              <div className="col-md-2">
                <div
                  className="card"
                  style={{
                    width: "100%",
                    height: "100px",
                    marginBottom: "10px",
                    background: `url(${pop}) center center no-repeat`,
                  }}
                ></div>
              </div>
              <div className="col-md-2">
                <div
                  className="card"
                  style={{
                    width: "100%",
                    height: "100px",
                    marginBottom: "10px",
                    background: `url(${indie}) center center no-repeat`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
