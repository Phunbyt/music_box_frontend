import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HistoryHeader from './HistoryHeader';
import { useHistory } from 'react-router-dom';

interface songInterface {
  createdAt: string;
  updatedAt: string;
  _id: string;
  trackId: number;
  trackTitle: string;
  trackLink: string;
  trackArtist: string;
  trackAlbum: string;
  userId: string;
}

type SongArr = songInterface[];
const ListeningHistory = () => {
  const [noOfElement, setNoOfElement] = useState(2);
  const [noOfElement2, setNoOfElement2] = useState(2);
  const [noOfElement3, setNoOfElement3] = useState(2);
  const [listenSong, setListenSong] = useState([] as SongArr);

  const loadMoreToday = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  const loadMoreYesterday = () => {
    setNoOfElement2(noOfElement2 + noOfElement2);
  };

  const loadMoreLastWeek = () => {
    setNoOfElement3(noOfElement3 + noOfElement3);
  };
  const today = listenSong.filter((item: any) => {
    return new Date(item.updatedAt).getDay() === new Date().getDay();
  });

  const yesterday = listenSong.filter((item: any) => {
    return new Date(item.updatedAt).getDay() === new Date().getDay() - 1;
  });

  const lastWeek = listenSong.filter((item: any) => {
    return new Date(item.updatedAt).getDay() === new Date().getDay() - 7;
  });

  let history = useHistory();
  const logOut = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');
    history.push('/');
    console.log('logged out');
  };

  const fetchListenHistory = async () => {
    try {
      const Token: any = localStorage.getItem('Token');
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      const data = await axios.get(
        'http://music-box-a.herokuapp.com/listeninghistory',
        config
      );

      setListenSong(data.data.data);

      console.log(listenSong);
    } catch (err) {
      // throw new Error(err.message);
    }
  };

  useEffect(() => {
    fetchListenHistory();
  }, []);

  // console.log(songsArray);

  const userFirstName: string = localStorage.getItem('FirstName') as string;
  // const userlastName: string = localStorage.getItem('LastName') as string;

  return (
    <>
      <HistoryHeader firstName={userFirstName} logOut={logOut} />
      
      {listenSong && today.length !== 0 &&(
        <div className='container'>
          <h5 className='subtitle'>Today</h5>
          <table>
            <thead>
              <tr>
                <th className='space'>#</th>
                <th></th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Time</th>
              </tr>
            </thead>
            {listenSong
              .filter((item: any) => {
                return (
                  new Date(item.updatedAt).getDay() === new Date().getDay()
                );
              })
              .map((item: any, index: number) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  {/* <img className='List-img' src={item} alt='img' /> */}
                  <td>{item.trackTitle}</td>
                  <td>{item.trackArtist}</td>
                  <td>{item.trackAlbum}</td>
                  {/* <td>{item.time}</td> */}
                  <td>
                    <span>
                      <i className='far fa-heart space' />
                    </span>
                    <span>
                      <i className='fas fa-plus' />
                    </span>
                  </td>
                </tr>
              ))
              .slice(0, noOfElement)}
          </table>
          {noOfElement < today.length && (
            <button className='logout' onClick={() => loadMoreToday()}>
              Show More
            </button>
          )}
        </div>
      )}
      {listenSong && yesterday.length !== 0 && (
        <div className='container'>
          <h5 className='subtitle'>Yesterday</h5>
          <table>
            <thead>
              <tr>
                <th className='space'>#</th>
                <th></th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Time</th>
              </tr>
            </thead>
            {listenSong
              .filter((item: any) => {
                return (
                  new Date(item.updatedAt).getDay() === new Date().getDay() - 1
                );
              })
              .map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  {/* <img className='List-img' src={item} alt='img' /> */}
                  <td>{item.trackTitle}</td>
                  <td>{item.trackArtist}</td>
                  <td>{item.trackAlbum}</td>
                  {/* <td>{item.time}</td> */}
                  <td>
                    <span>
                      <i className='far fa-heart space' />
                    </span>
                    <span>
                      <i className='fas fa-plus' />
                    </span>
                  </td>
                </tr>
              ))
              .slice(0, noOfElement2)}
          </table>
          {noOfElement2 < yesterday.length && (
            <button className='logout' onClick={() => loadMoreYesterday()}>
              Show More
            </button>
          )}
        </div>
      )}
      {listenSong && lastWeek.length !== 0 && (
        <div className='container'>
          <h5 className='subtitle'>Last Week</h5>
          <table>
            <thead>
              <tr>
                <th className='space'>#</th>
                <th></th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Time</th>
              </tr>
            </thead>
            {listenSong
              .filter((item: any) => {
                return (
                  new Date(item.updatedAt).getDay() === new Date().getDay() - 7
                );
              })
              .map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  {/* <img className='List-img' src={item} alt='img' /> */}
                  <td>{item.trackTitle}</td>
                  <td>{item.trackArtist}</td>
                  <td>{item.trackAlbum}</td>
                  {/* <td>{item.time}</td> */}
                  <td>
                    <span>
                      <i className='far fa-heart space' />
                    </span>
                    <span>
                      <i className='fas fa-plus' />
                    </span>
                  </td>
                </tr>
              ))
              .slice(0, noOfElement3)}
          </table>
          {noOfElement3 < lastWeek.length && (
            <button className='logout' onClick={() => loadMoreLastWeek()}>
              Show More
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ListeningHistory;
