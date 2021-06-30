import React, {ChangeEvent, FormEvent, useRef, useState, useEffect} from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";


interface property {
  artist?: Record<string, any>[];
  album?: Record<string, any>[];
  playlist?: Record<string, any>[];
  allData?: Record<string, any>[];
}

interface Props {
  firstName: string;
  lastName: string;
}

export default function NavigationBar() {
  const container = useRef<HTMLDivElement>(null);
  const [allData, setAllData] = useState({} as property);
  const [info, setInfo] = useState("");
  const [display, setDisplay] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [visible, setVisible] = useState(false)
  

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInfo(e.target.value);
  }

  const fetchAll = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("Token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const {
        data: { data },
      } = await axios.get(
        `https://music-box-a.herokuapp.com/music/search/?search=${info}`,
        config
      );
      setAllData(data);
      setDisplay(true);
    } catch (error) {
      console.log(error);
    }
  };
  function handleClickOutside(event: { target: any }) {
    if (container.current?.contains(event.target)) {
      return;
    }
    setAllData({});
    setInfo("");
    setDisplay(false);
  }

  const lastName = localStorage.getItem("lastName");
  const firstName = localStorage.getItem("firstName");

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
  return (
    <div style={{maxWidth: '100vw'}}> 
      <nav className="nav-bar">
        <div className="music-box-letters">
          <Link to="/home" style={{color: "white"}}>
            <p>music</p><p>box</p>
          </Link>
        </div>

        <div className="list-bar" onClick={() => {
          console.log(showLinks)
          setShowLinks(prev => !prev)}}>
          <i className="fa fa-bars"></i>
        </div>

        <div className="left-side" id={showLinks ? "hidden" : ""}>
          <div className="link" id="link">
            <NavLink to="/home" className="link-tags" activeStyle={{color: '#2dceef'}}>Home</NavLink>
            <NavLink to="/home" className="link-tags" activeStyle={{color: '#2dceef'}}>Library</NavLink>
            <NavLink to="/home" className="link-tags" activeStyle={{color: '#2dceef'}}>Browse</NavLink>
          </div>

          <div className="search-and-user-profile">
            <form 
            onSubmit={(e: FormEvent<HTMLFormElement>) => {fetchAll(e)}}
            style={{position: 'relative'}}
            >
              <input type="text" placeholder="Search" onChange={handleChange} value={info} className="search-box"/>
              <i className="fa fa-search" style={{position: 'absolute', left: 10, top: 6, fontSize: 25, color: '#bfbfbf'}}/>
              <div ref={container} className="rendered-list" style={{visibility: display ? "visible": "hidden"}}>
                  {allData && allData.artist ? ( 
                    allData.artist.length > 0 && <ul id="myUL" style={{height: 230, overflowY: "scroll"}}>
                      <p style={{visibility: display ? "visible": "hidden", paddingLeft: 10, paddingTop: 10, font: 'normal normal bold 18px Lato', letterSpacing: 0.11, color: '#FFFFFF', opacity: 1}}>Artists<i className="italic" style={{position: "absolute", left: "220px"}}>
                        <Link style={{textDecoration: 'none', color: '#D5D5D5'}} to={{pathname: "/artistdetails", state: {artistDetails: allData.artist, info: info}}}>
                          view All
                          </Link></i></p>
                      {allData.artist ? (
                        allData.artist.map((item: Record<string, any>) => (
                          <li key={item.id} style={{display: "inlineBlock", paddingLeft: "10px", paddingTop: "5px", position: "relative"}} className='search-list' >
                            <Link to="/artist" style={{ display: 'flex'}}>
                              <div style={{ width: "50px", height: "50px" }}>
                                  <img className="artist-album-playlist-pic" style={{borderRadius: '50%'}} src={item.picture}/>
                              </div>
                            <span className="names-of-artists-albums">{item.name}</span>
                            </Link>
                          </li>
                        )).slice(0, 3)
                      ): (<></>)}
                    </ul>
                  ) : <></> 
                  }
                  {allData && allData.album ? ( 
                  allData.album.length > 0 && <ul id="myUL" style={{height: 250, overflowY: "scroll", paddingTop: 20}}>
                      <p style={{visibility: display ? "visible": "hidden", paddingLeft: 10, paddingTop: 10, font: 'normal normal bold 18px Lato', letterSpacing: 0.11, color: '#FFFFFF', opacity: 1}}>Albums<i className="italic" style={{position: "absolute", left: "220px"}}> 
                      <Link style={{textDecoration: 'none', color: '#D5D5D5'}} to={{pathname: "/albumdetails", state: {albumDetails: allData.album, info: info}}}>
                        view All
                        </Link>
                      </i></p>
                      {allData.album ? (
                        allData.album.map((item: Record<string, any>) => (
                          <li key={item.id} style={{display: "inlineBlock", paddingLeft: "10px", paddingTop: 10, position: "relative"}} className='search-list'>
                            <Link to="/albumdetails"
                              style={{ 
                                display: 'flex',
                              }}
                            >
                              <div style={{ width: 50, height: 50 }}>
                                <img className="artist-album-playlist-pic" src={item.cover}/>
                              </div>
                            <span className="names-of-artists-albums">{item.title}</span>
                            <span style={{
                              marginLeft: 10,
                              position: "absolute",
                              top: 30,
                              left: 60,
                              font: "normal normal normal 14px Lato",
                              letterSpacing: "0.08px",
                              color: "#99999F",
                              opacity: 1,
                            }}>{item.artistName}</span>
                            </Link>
                          </li>
                        )).slice(0, 3)
                      ): (<></>)}
                    </ul>
                  ) : <></>
                  }
                  {allData && allData.playlist ? ( 
                  allData.playlist.length > 0 && <ul id="myUL" style={{height: 230, overflowY: "scroll", paddingTop: 20}}>
                      <p style={{visibility: display ? "visible": "hidden", paddingLeft: 10, paddingTop: 10, font: 'normal normal bold 18px Lato', letterSpacing: 0.11, color: '#FFFFFF', opacity: 1}}>Playlists<i className="italic" style={{position: "absolute", left: "220px"}}>view more</i></p>
                      {allData.playlist ? (
                        allData.playlist.map((item: Record<string, any>) => (
                          <li key={item.id} style={{display: "inlineBlock", paddingLeft: "10px", paddingTop: 10, position: "relative"}}>
                            <Link to="/artist"
                              style={{ 
                                display: 'flex',
                              }}
                            >
                              <div style={{ width: 50, height: 50 }}>
                                  <img className="artist-album-playlist-pic" src={item.cover}/>
                              </div>
                            <span
                              style={{
                                marginLeft: 10,
                                position: "absolute",
                                top: 15,
                                left: 60,
                                font: "normal normal normal 15px Lato",
                                letterSpacing: "0.09px",
                                color: "#FFFFFF",
                                opacity: 1
                              }}
                            >{item.name}</span>
                            </Link>
                          </li>
                        )).slice(0, 3)
                      ): (<></>)}
                    </ul>
                  ) : <></>
                  }
                </div>
            </form>
            <div className="user-profile">
              <i className="fa fa-user-circle-o" style={{fontSize: "30px", marginRight: '5px'}} />
              {firstName} {lastName}
              <i className="fa fa-chevron-circle-down drop-down-button" onClick={() => setVisible(!visible)} style={{}}>
                <div style={{position: 'absolute', top: 30, left: -70, zIndex: 10000, visibility: visible ? "visible": "hidden", fontFamily: 'Lato', alignItems: 'center'}}>
                  <NavLink className="dropdown" to="/profile">Profile</NavLink>
                  <NavLink className="dropdown" to="/landing-page">Log out</NavLink>
                </div>
              </i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
