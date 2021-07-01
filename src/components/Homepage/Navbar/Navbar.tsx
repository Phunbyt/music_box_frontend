import React, {
  ChangeEvent,
  FormEvent,
  useRef,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
// import NoResult from '../../NoResult/NoResult'
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { FaTimes } from 'react-icons/fa';

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
  const location = useLocation();
  // const [noResult, setNoResult] = useState({modal: true})

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
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#161a1a",
        zIndex: 99,
      }}
    >
      <Container>
        <div></div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto active">
            <NavLink activeClassName="selected-links" className="link-to-routes" to="/browse">
              Browse
            </NavLink>
            <NavLink activeClassName="selected-links" className="link-to-routes" to="/playlists">
              Library
            </NavLink>
            <NavLink activeClassName="selected-links" className="link-to-routes" to="/home">
              Home
            </NavLink>
          </Nav>

          {location.pathname && (location.pathname === '/playlists' || location.pathname === '/albums' || location.pathname === '/artists') && <div className="path">
            <NavLink className="link-to-routes" to="/playlists">Playlists</NavLink>
            <NavLink className="link-to-routes" to="/albums">Albums</NavLink>
            <NavLink className="link-to-routes" to="/artists">Artists</NavLink>
          </div>}

          <div>
            <Form
              className="d-flex"
              style={{ position: "relative", marginLeft: '10px' }}
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                fetchAll(e);
              }}
            >
              <input
                id="search"
                type="search"
                placeholder="Search"
                className="mr-2 rounded-pill search-box-input"
                aria-label="Search"
                onChange={handleChange}
                value={info}
              />
              <i style={{ position: "absolute", left: "10px", top: "6px" }}>
                <i
                  className="fa fa-search"
                  style={{
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "50%",
                    fontSize: "25px",
                    color: "#bfbfbf",
                  }}
                />
              </i>
              <div
                ref={container}
                className="ref-container-style"
                style={{ visibility: display ? "visible" : "hidden" }}
              >
                {allData && allData.artist ? (
                  allData.artist.length > 0 && (
                    <ul id="myUL" style={{ height: 250, overflowY: "scroll" }}>
                      <p className="artist-list-name"
                        style={{ visibility: display ? "visible" : "hidden"}}>
                        Artists
                        <i
                          className="italic"
                          style={{ position: "absolute", left: "220px" }}
                        >
                          <Link
                            style={{ textDecoration: "none", color: "#D5D5D5" }}
                            to={{
                              pathname: "/artistdetails",
                              state: {
                                artistDetails: allData.artist,
                                info: info,
                              },
                            }}>
                            view All
                          </Link>
                        </i>
                      </p>
                      {allData.artist ? (
                        allData.artist
                          .map((item: Record<string, any>) => (
                            <li
                              key={item.id}
                              style={{
                                display: "inlineBlock",
                                paddingLeft: "10px",
                                paddingTop: "5px",
                                position: "relative",
                              }}
                            >
                              <Link to="/artist" style={{ display: "flex" }}>
                                <div style={{ width: "50px", height: "50px" }}>
                                  <img className="artist-album-playlist-pic"
                                    src={item.picture} alt="pic"
                                  />
                                </div>
                                <span className="names-of-artists-albums">
                                  {item.name}
                                </span>
                              </Link>
                            </li>
                          ))
                          .slice(0, 3)
                      ) : (
                        <></>
                      )}
                    </ul>
                  )
                ) : (
                  <></>
                )}
                {allData && allData.album ? (
                  allData.album.length > 0 && (
                    <ul
                      id="myUL"
                      style={{
                        height: 250,
                        overflowY: "scroll",
                        paddingTop: 20,
                      }}
                    >
                      <p className="artist-list-name"
                        style={{visibility: display ? "visible" : "hidden"}}>
                        Albums
                        <i
                          className="italic"
                          style={{ position: "absolute", left: "220px" }}
                        >
                          <Link
                            style={{ textDecoration: "none", color: "#D5D5D5" }}
                            to={{
                              pathname: "/albumdetails",
                              state: {
                                albumDetails: allData.album,
                                info: info,
                              },
                            }}
                          >
                            view All
                          </Link>
                        </i>
                      </p>
                      {allData.album ? (
                        allData.album
                          .map((item: Record<string, any>) => (
                            <li
                              key={item.id}
                              style={{
                                display: "inlineBlock",
                                paddingLeft: "10px",
                                paddingTop: 10,
                                position: "relative",
                              }}
                            >
                              <Link
                                to="/albumdetails"
                                style={{
                                  display: "flex",
                                }}
                              >
                                <div style={{ width: 50, height: 50 }}>
                                  <img
                                    className="artist-album-playlist-pic"
                                    src={item.cover}
                                  />
                                </div>
                                <span className="names-of-artists-albums">
                                  {item.title}
                                </span>
                                <span
                                  style={{
                                    marginLeft: 10,
                                    position: "absolute",
                                    top: 30,
                                    left: 60,
                                    font: "normal normal normal 14px Lato",
                                    letterSpacing: "0.08px",
                                    color: "#99999F",
                                    opacity: 1,
                                  }}
                                >
                                  {item.artistName}
                                </span>
                              </Link>
                            </li>
                          ))
                          .slice(0, 3)
                      ) : (
                        <></>
                      )}
                    </ul>
                  )
                ) : (
                  <></>
                )}
                {allData && allData.playlist ? (
                  allData.playlist.length > 0 && (
                    <ul
                      id="myUL"
                      style={{
                        height: 250,
                        overflowY: "scroll",
                        paddingTop: 20,
                      }}
                    >
                      <p
                        style={{
                          visibility: display ? "visible" : "hidden",
                          paddingLeft: 10,
                          paddingTop: 10,
                          font: "normal normal bold 18px Lato",
                          letterSpacing: 0.11,
                          color: "#FFFFFF",
                          opacity: 1,
                        }}
                      >
                        Playlists
                        <i
                          className="italic"
                          style={{ position: "absolute", left: "220px" }}
                        >
                          view more
                        </i>
                      </p>
                      {allData.playlist ? (
                        allData.playlist
                          .map((item: Record<string, any>) => (
                            <li
                              key={item.id}
                              style={{
                                display: "inlineBlock",
                                paddingLeft: "10px",
                                paddingTop: 10,
                                position: "relative",
                              }}
                            >
                              <Link
                                to="/artist"
                                style={{
                                  display: "flex",
                                }}
                              >
                                <div style={{ width: 50, height: 50 }}>
                                  <img
                                    className="artist-album-playlist-pic"
                                    src={item.cover}
                                  />
                                </div>
                                <span className="album-artist-name-style">
                                  {item.name}
                                </span>
                              </Link>
                            </li>
                          ))
                          .slice(0, 3)
                      ) : (
                        <></>
                      )}
                    </ul>
                  )
                ) : (
                  <></>
                )}
              </div>
            </Form>
          </div>
          <NavDropdown
            title={
              <span
                className="text-white my-auto"
                style={{ font: "normal normal normal 20px Lato" }}
              >
                <i
                  className="fa fa-user-circle-o"
                  style={{ fontSize: "30px" }}
                />
                {"    "}
                {firstName} {lastName}
              </span>
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item to="/">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="/">Log out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
