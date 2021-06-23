import React, {useEffect, useContext} from 'react';
import { GenreContext } from '../../context/GenreContext';
import Genre from '../Genre/Genre';
import { Container, Row } from 'react-bootstrap';
import './Browse.css'
export interface BrowseGenresProps {
  
}
export interface GenresInterface {
 id: string;
 name: string;
 picture: string;
 picture_small: string;
 picture_medium: string;
 picture_big: string;
 picture_xl: string;
 type: string;
}

const BrowseGenres: React.SFC<BrowseGenresProps> = () => {
  const {genres,getAllGenres}:any = useContext(GenreContext)
  
  useEffect(()=>{
    getAllGenres()
  },[])

  return (
   <div className="container-fluid" id="browse">
    <h3 className="text-white mb-4">Genres</h3>
    <Row>
     {genres.map((genre: GenresInterface) => {
      return <Genre key={genre.id} genre={genre} />;
     })}
    </Row>
   </div>
  );
}
 
export default BrowseGenres;