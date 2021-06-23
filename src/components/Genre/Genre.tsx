import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './Genre.css'
export interface GenreProps {
  
}
 
const Genre = ({ genre }:any) => {
 return (
  <Col xl={2} lg={3} md={4} sm={6}>
   <a href={`/genres/${genre.id}`} className="d-block genre text-right">
    <h3 className="text-white genre-name">{genre.name}</h3>
    <Card
     className="card genre-poster"
     style={{ backgroundImage: `url(${genre.picture_medium})` }}
    >
     <div className="overlay"></div>
    </Card>
   </a>
  </Col>
 );
};
 
export default Genre;