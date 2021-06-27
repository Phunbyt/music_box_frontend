import React, {
  ChangeEvent,
  FormEvent,
  useRef,
  useState,
  useEffect
} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import "./Navbar.css";
import 'font-awesome/css/font-awesome.min.css';

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
  const [artistLimit, setArtistLimit] = useState(3);
  const [albumLimit, setAlbumLimit] = useState(3);
  const [artistList, setArtistList] = useState(230);
  const [albumList, setAlbumList] = useState(230);
  const [playlistLimit, setPlaylistList] = useState(250);
  const [allList, setAllList] = useState(600)

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
      setArtistLimit(3);
      setAlbumLimit(3);
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
    setAllList(600);
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
  
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{position: 'fixed', top: 0, width: '100%', backgroundColor: '#161a1a', zIndex: 99}}>  
      <Container>
        <Navbar.Brand href="/home">Music-Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto active">
            <Nav.Link href="/Browse">Browse</Nav.Link>
            <Nav.Link href="/Library">Library</Nav.Link>
            <Nav.Link href="/Home">Home</Nav.Link>
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
                    top: "50px",
                    height: allList,
                    background: "#3A3A3D 0% 0% no-repeat padding-box",
                    visibility: display ? "visible": "hidden",
                    borderRadius: "3%",
                  }}>
                {allData && allData.artist ? ( 
                  allData.artist.length > 0 && <ul id="myUL" style={{height: artistList, overflowY: "scroll"}}>
                    <p style={{visibility: display ? "visible": "hidden", paddingLeft: 10, paddingTop: 10, font: 'normal normal bold 18px Lato', letterSpacing: 0.11, color: '#FFFFFF', opacity: 1}}>Artists<i className="italic" style={{position: "absolute", left: "220px"}}><Link style={{textDecoration: 'none', color: '#D5D5D5'}} to={{pathname: "/artistdetails", state: {artistDetails: allData.artist, info: info}}}>view All</Link></i></p>
                    {allData.artist ? (
                      allData.artist.map((item: Record<string, any>) => (
                        <li key={item.id} style={{display: "inlineBlock", paddingLeft: "10px", paddingTop: "5px", position: "relative"}}>
                          <Link to="/artist"
                            style={{ 
                              display: 'flex',
                            }}
                          >
                            <div style={{ width: "50px", height: "50px" }}>
                                <img className="pic" src={item.picture}
                                  style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'block',
                                    objectFit: 'cover',
                                    borderRadius: '50%' 
                                  }}
                                />
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
                      )).slice(0, artistLimit)
                    ): (<></>)}
                  </ul>
                ) : <></> 
                }
                {allData && allData.album ? ( 
                 allData.album.length > 0 && <ul id="myUL" style={{height: albumList, overflowY: "scroll", paddingTop: 20}}>
                    <p style={{visibility: display ? "visible": "hidden", paddingLeft: 10, paddingTop: 10, font: 'normal normal bold 18px Lato', letterSpacing: 0.11, color: '#FFFFFF', opacity: 1}}>Albums<i className="italic" style={{position: "absolute", left: "220px"}}> 
                     <Link style={{textDecoration: 'none', color: '#D5D5D5'}} to={{pathname: "/albumdetails", state: {albumDetails: allData.album, info: info}}}>view more</Link>
                    </i></p>
                    {allData.album ? (
                      allData.album.map((item: Record<string, any>) => (
                        <li key={item.id} style={{display: "inlineBlock", paddingLeft: "10px", paddingTop: 10, position: "relative"}}>
                          <Link to="/albumdetails"
                            style={{ 
                              display: 'flex',
                            }}
                          >
                            <div style={{ width: 50, height: 50 }}>
                                <img className="pic" src={item.cover}
                                  style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'block',
                                    objectFit: 'cover', 
                                  }}
                                />
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
                          >{item.title}</span>
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
                      )).slice(0, albumLimit)
                    ): (<></>)}
                  </ul>
                ) : <></>
                }
                {allData && allData.playlist ? ( 
                 allData.playlist.length > 0 && <ul id="myUL" style={{height: albumList, overflowY: "scroll", paddingTop: 20}}>
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
                                <img className="pic" src={item.cover}
                                  style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'block',
                                    objectFit: 'cover', 
                                  }}
                                />
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
                          >{item.title}</span>
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
                      )).slice(0, playlistLimit)
                    ): (<></>)}
                  </ul>
                ) : <></>
                }

              </div>
            </Form>
          </div>
          <NavDropdown
            title={
              <span className="text-white my-auto" style={{font: "normal normal normal 16px/32px Lato"}}>
                <i className="fa fa-user-circle-o"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    border: "1px solid white",
                    borderRadius: "50%",
                    fontSize: "30px",
                    marginRight: '5px'
                  }}
                />{"    "}
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
    </Navbar>
  );
}
