import { genresData } from "../fakeapi"

export const ACTIONS={
  GET_GENRES: 'getGenres',

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
export const GenreReducer = (genres:GenresInterface[],action:Record<string, any>)=>{
  switch (action.type){
    case ACTIONS.GET_GENRES:
      return getGenres()
  }
}

async function getGenres(){
  const res = await genresData
  return res 
}