import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../ListeningHistory/style.css';
import UserHeader from './userheader';
import { useHistory, Link } from 'react-router-dom';
import ChangePassword from '../ChangePassword/ChangePassword';
import StreamingSection from './StreamingSection';
import Modal from '../ChangePassword/Modal';
import { Col, Row } from 'react-bootstrap';
import { Grid, Container, TextField, MenuItem } from '@material-ui/core';
import axios from 'axios';
import image from './user.png';
import NavigationBar from '../Homepage/Navbar/Navbar';

const days: number[] = Array.from({ length: 31 }, (x, i) => i);
const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface userInterface {
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: string;
  dateOfBirth?: string;
  _id?: string;
}

const UserForm = () => {
  const [user, setUser] = useState({} as userInterface);
  const [field, setField] = useState({
    modal: false,
  });

  const lastName = localStorage.getItem('lastName');
  const firstName = localStorage.getItem('firstName');
  const userId = localStorage.getItem('userId')
  const gender = localStorage.getItem('gender');

  useEffect(() => {
    setUser(user);
  }, []);
  let history = useHistory();

  const logOut = () => {
    localStorage.removeItem('userInfo');
    history.push('/');
  };

  const onBlurFunc = async () => {
    try {
      const token = localStorage.getItem('Token');
      const { firstName, lastName, gender } = user;
      await axios.put(
        `http://music-box-a.herokuapp.com/music/profile/${userId}`,
        { firstName, lastName, gender },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedUser = await axios.get(
        `http://music-box-a.herokuapp.com/music/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userObj: Record<string, any> = {
        firstName: updatedUser.data.firstName,
        lastName: updatedUser.data.lastName,
        _id: updatedUser.data._id,
      };
      setUser(userObj);
      console.log('User profile modified');
    } catch (err) {
      console.log(err.message);
    }
  };

  const changeName = (event: React.FormEvent<HTMLInputElement>) => {
    const { name } = event.target as HTMLInputElement;
    if (event.target) {
      const newName = (event.target as HTMLInputElement).value;
      setUser({ ...user, [name]: newName });
    }
  };

  return (
    <>
      <NavigationBar />
      <Modal
        show={field.modal}
        close={() => {
          setField({ ...field, modal: false });
        }}
      >
        <ChangePassword />
      </Modal>
      <div className='div-container text-white'>
        <div className='flex-container'>
          <div className='image-parent'>
            <img src={image} alt='user icon' className='image' />
          </div>
          <div className='hello'>
            <div className='username'>
              {firstName} {lastName}
            </div>
            <div className='hello2'>Free Account</div>
          </div>
          <button className='premium'>Go To Premium</button>
        </div>
        <div className='form'>
          <h3 className='form-title'>Contact</h3>
        </div>
        <div>
          <div className='container text-white'>
            <div className='row'>
              <div className='col-md-12 mx-auto'>
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <input
                      type='text'
                      name='firstName'
                      value={user.firstName}
                      className='form-control form-control-sm text-white border-bottom border-white border-0 rounded-0 div-form'
                      placeholder='first name'
                      onChange={changeName}
                      onBlur={onBlurFunc}
                    />
                  </div>
                  <div className='col-md-6 mb-3'>
                    <input
                      type='text'
                      name='lastName'
                      value={user.lastName}
                      className='form-control form-control-sm  div-form text-white border-bottom border-white border-0 rounded-0'
                      placeholder='last name'
                      onChange={changeName}
                      onBlur={onBlurFunc}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 mb-3 mt-3'>
                    <input
                      type='text'
                      value={user.email}
                      className='form-control form-control-sm div-form text-white border-bottom border-white border-0 rounded-0'
                      placeholder='email'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Container style={{ maxWidth: '90%' }}> */}
      <div className='div-container text-white'>
        <Row>
          <Grid item md={6} xs={12}>
            <TextField
              label='Gender'
              id='gender'
              className='white gender'
              select
              fullWidth
            >
              <MenuItem value={10}>male</MenuItem>
              <MenuItem value={20}>female</MenuItem>
            </TextField>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label='Country'
              id='country'
              className='white gender'
              select
              fullWidth
            >
              <MenuItem value='nigeria'>Nigeria</MenuItem>
              <MenuItem value='South Africa'>South Africa</MenuItem>
              <MenuItem value='Ghana'>Ghana</MenuItem>
              <MenuItem value='Cameroun'>Cameroun</MenuItem>
            </TextField>
          </Grid>
        </Row>
        <Row>
          <Grid item md={4} xs={12}>
            <TextField
              label='Date of Birth'
              id='date'
              className='white gender'
              select
              fullWidth
            >
              {days.map((index) => {
                return <MenuItem value={index + 1}>{index + 1}</MenuItem>;
              })}
            </TextField>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              label='Month'
              id='month'
              className='white gender'
              select
              fullWidth
            >
              {months.map((month) => {
                return <MenuItem value={month}>{month}</MenuItem>;
              })}
            </TextField>
          </Grid>
          <Grid item md={4} xs={12} className='white gender'>
            <TextField
              label='Year'
              id='year'
              className='white gender'
              select
              fullWidth
            >
              <MenuItem value='2020'>2020</MenuItem>
              <MenuItem value='2019'>2019</MenuItem>
            </TextField>
          </Grid>
        </Row>
        <StreamingSection />
        <div className='account-parent'>
          <h5 className='account'>Account</h5>
          <div className='notifications'>
            <p>Enable Browser Notifications</p>
          </div>
          <div>
            <p className='notifications'>Language</p>
          </div>
          <p
            className='notifications change-password'
            onClick={() => {
              setField({ ...field, modal: true });
            }}
          >
            Change Password
          </p>
          <Link to='/listening-history' className='notifications'>
            Listening History
          </Link>
          <p className='notifications'>Add new account</p>
          <p className='notifications2'>Terms and Conditions</p>
          <p className='notifications2'>Privacy Policy</p>
          <p className='notifications2'>Support</p>
        </div>
        <div className='bottomButtons'>
          <button className='logout' onClick={() => logOut()}>
            LOG OUT
          </button>

          {/* <button
            className='logout'
            onClick={() => {
              setField({ ...field, modal: true });
            }}
          >
            Change Password
          </button> */}
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default UserForm;
