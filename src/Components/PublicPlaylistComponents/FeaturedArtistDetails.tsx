
import axios, { AxiosRequestConfig } from 'axios'
import { useState, useEffect } from 'react'

import styles from './FeaturedArtistDetails.module.css'

const FeaturedArtistDetails = (props: Record<string, any>) => {
    const artistId = props.artistId;
    const artist = props.artist;
    const artistImg = props.artistImg
    const [noOfFans, setNoOfFans] = useState(0)
    const callApi = async () => {
        try {
          const { data } = await axios.post('https://music-box-a.herokuapp.com/music/signIn', {
            email:  "madarauchiha@gmail.com",
            password: "12345678",
          });
          const token = data.token;
          localStorage.setItem('token', token);
        } catch (err) {
          console.log(err);
        }
      };
      const featuredArtist = async () => {
        const tokenValue = localStorage.getItem('token');
        const config:AxiosRequestConfig = {
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        };
        try {
          const artist = await axios.post(
            `https://music-box-a.herokuapp.com/artist/create/${artistId}`,{},
            config
          );
          const featuredArtistDetails = artist.data;
          setNoOfFans(featuredArtistDetails.noOfFan)
          
        } catch (err) {
          console.log(err);
        }
      };
      
      useEffect(() => {
          callApi();
          featuredArtist();
      }, []); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <a style = {{textDecoration:'none', color:'white'}} href ={`/artists/${artist}`} className={styles.featuredArtistContainer}>
                <div className={styles.featuredArtistImageContainer}>
                <img className={styles.featuredArtistImage} src={artistImg} alt='' />
                </div>
                <p>{artist}</p>
                <p className='fas fa-heart' style={{marginTop: '-10px'}} >  {noOfFans}</p>
            </a> 
    )
}

export default FeaturedArtistDetails