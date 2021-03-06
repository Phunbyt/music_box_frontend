import "./Genres.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';

interface Props {
  genres: Record<string, any>;
}

export default function Genres() {
  const [genres, setGenres] = useState([] as Record<string, any>);
  let history = useHistory();
  const getGenres = async () => {
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
        "https://music-box-a.herokuapp.com/music/genres",
        config
      );
      setGenres(data);
    } catch (error) {}
  };

  useEffect(() => {
    getGenres();
    return () => {
      
    };
  });

  return (
    <div className="genres-main">
      <div className="genres-top">
        <p>Genres</p>
      </div>
      <div className="genres-bottom">
        {genres &&
          genres.map((item: Record<string, any>) => (
            <div className="genres">
              <img alt='pic'
                className="genres-pic"
                src={item.picture}
                onClick={() => history.push(`/genres/${item.id}`)}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
              <p style={{textAlign: 'center'}}>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
