import React, {
  ChangeEvent,
  FormEvent,
  useRef,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
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
    <div>
      <nav className="nav-bar">
        <div className="left-side">
          <div className="music-box-letters">
            <Link to="/home" style={{color: "white"}}>
                <p>music</p><p>box</p>
            </Link>
          </div>
          <div className="link">
            <NavLink to="/home" className="link-tags" activeStyle={{color: '#2dceef', border: '1px solid #2dceef', borderRadius: '25px'}}>Home</NavLink>
            <NavLink to="/home" className="link-tags" activeStyle={{color: '#2dceef'}}>Library</NavLink>
            <NavLink to="/home" className="link-tags" activeStyle={{color: '#2dceef'}}>Browse</NavLink>
          </div>
          <button>Click</button>
        </div>
        <div className="right-side">
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
            <i className="fa fa-user-circle-o" style={{fontSize: "30px"}} />
            {firstName} {lastName}
          </div>
        </div>
      </nav>


      {/* <Navbar collapseOnSelect expand="lg" variant="dark" style={{position: 'fixed', top: 0, width: '100%', backgroundColor: '#161a1a', zIndex: 99}}>  
      <Container>
        <Navbar.Brand href="/home">Music-Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{marginRight: 'auto'}}>
            <NavLink className="link" activeStyle={{color: '#2DCEEF', borderRadius: '5px', border: '2px solid #2DCEEF'}} to="/Browse">Browse</NavLink>
            <NavLink className="link" activeStyle={{color: '#2DCEEF', borderRadius: '5px', border: '2px solid #2DCEEF'}} to="/Library">Library</NavLink>
            <NavLink className="link" activeStyle={{color: '#2DCEEF', borderRadius: '15px', border: '2px solid #2DCEEF'}} to="/Home">Home</NavLink>
          </Nav>
          <div>
            <Form
              className="d-flex"
              style={{ position: "relative" }}
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                fetchAll(e);
              }}
            >
              <input
                style={{
                  paddingLeft: "40px",
                  outline: "0",
                  height: "40px",
                  width: "300px",
                  backgroundColor: "#898B91",
                  font: "normal normal normal 18px/52px Lato"
                }}
                id="search"
                type="search"
                placeholder="Search"
                className="mr-2 rounded-pill"
                aria-label="Search"
                onChange={handleChange}
                value={info}
              />
              <i style={{ position: "absolute", left: "10px", top: "6px" }}>
                <i className="fa fa-search"
                  style={{
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "50%",
                    fontSize: "25px",
                    color: "#bfbfbf",
                  }}
                />
              </i>
              <div ref={container} style={{
                    zIndex: 99999,
                    color: "white",
                    position: "absolute",
                    top: 50,
                    height: 550,
                    backgroundColor: '#303033',
                    visibility: display ? "visible": "hidden",
                    borderRadius: "3%", 
                  }}>
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
            </Form>
          </div>
          <NavDropdown
            title={
              <span className="text-white my-auto" style={{font: "normal normal normal 20px Lato"}}>
                <i className="fa fa-user-circle-o" style={{fontSize: "30px"}} />
                {firstName} {lastName}
              </span>
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </div>
  );
}
