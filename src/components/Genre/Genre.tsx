import React, {useContext, useState} from 'react';
import { GenresInterface } from '../Browse/Browse';
import { Col } from 'react-bootstrap';
import { GenreContext } from '../../context/GenreContext';
import { Link } from 'react-router-dom';
import './Genre.css'
export interface GenreProps {
  
}
 
const Genre = ({ genre }:any) => {
 return (
  
   <Col xl={2} lg={3} md={4} sm={6}>
    <Link to={`/genres/${genre.id}`} className="d-block genre text-right">
     <img
      className="genre-poster"
      alt="genre poster"
      src={genre.picture_medium}
     />
     <h3 className="genre-name text-white">{genre.name}</h3>
    </Link>
   </Col>

 );
};
 
export default Genre;