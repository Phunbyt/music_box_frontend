import React, { ChangeEvent, FormEvent, useRef, useState, useEffect } from "react";
import axios from 'axios';
import { FaUser, FaSearch } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import "./Navbar.css";


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
export default function NavigationBar({
  firstName,
  lastName,
}: Props) {
  const container = useRef<HTMLUListElement>(null);
  const [allData, setAllData] = useState({} as property);
  const [info, setInfo] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInfo(e.target.value);
  }

  const fetchAll = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("Token");
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      };
      const { data: { data } } = await axios.get(`https://music-box-a.herokuapp.com/music/search/?search=${info}`, config);
      setAllData(data)
    }
    catch (error) {
      console.log(error);
    }
  }
  function handleClickOutside(event: { target: any }) {
    if (container.current?.contains(event.target)) {
      return;
    }
    setAllData({});
    setInfo("");
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Music-Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
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
                <FaSearch
                  style={{
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "50%",
                    fontSize: "25px",
                    color: "#bfbfbf",
                  }}
                />
              </i>
              {allData.artist ? (
                <ul
                  id="myUL"
                  style={{
                    zIndex: 99,
                    color: "white",
                    position: "absolute",
                    top: "50px",
                    height: "400px",
                    borderRadius: "3%",
                  }}
                  className="container"
                  ref={container}
                >
                  {allData && allData.artist ? (
                    allData.allData &&
                    allData.allData.map((item: Record<string, any>) => (
                      <li key={item.id}>
                        <a href="/artist">
                          {item.name || item.title}
                          <span style={{ display: "none" }}>{item.id}</span>
                        </a>
                      </li>
                    ))
                  ) : (
                    <></>
                  )}
                </ul>
              ) : (
                ""
              )}
            </Form>
          </div>
          <NavDropdown
            title={
              <span className="text-white my-auto">
                <FaUser
                  style={{
                    color: "white",
                    cursor: "pointer",
                    border: "2px solid white",
                    borderRadius: "50%",
                    fontSize: "30px",
                  }}
                />
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
