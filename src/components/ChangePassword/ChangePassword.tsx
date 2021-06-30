import { useState } from 'react';
import axios from 'axios';
import './ChangePassword.css';


const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const changePasswordHandler = async (e: any) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      console.log('password don not match');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      }, 9000);
      return setError("Passwords don't match");
    }

    try {
      const userToken = localStorage.getItem('Token');
      const userId = localStorage.getItem('UserId');

      const { data } = await axios.put(
        `http://music-box-a.herokuapp.com/music/changePassword/${userId}`,
        { oldPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      
      console.log('i don reach here ooo');
      const dataAxios = data;
      console.log('THIS IS THE DATA FROM AXIOS', dataAxios);
      setSuccess(dataAxios.message);
    } catch (error) {
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      }, 10000);
      console.log(error.message);
      return setError(error.message);
    }
  };

  const userFirstName: string = localStorage.getItem('FirstName') as string;


  return (
    <>
      <div className='resetpassword-screen'>
        <form
          onSubmit={changePasswordHandler}
          className='resetpassword-screen__form'
        >
          <h3 className='resetpassword-screen__title'>Change Password</h3>
          {error && <span className='error-message'>{error} </span>}
          <div className='form-group'>
            <label htmlFor='password'>Old Password:</label>
            <input
              type='password'
              required
              id='oldPassword'
              placeholder='Enter old password'
              autoComplete='true'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>New Password:</label>
            <input
              type='password'
              required
              id='newpassword'
              placeholder='Enter new password'
              autoComplete='true'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmpassword'>Confirm New Password:</label>
            <input
              type='password'
              required
              id='confirmpassword'
              placeholder='Confirm new password'
              autoComplete='true'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {success && (
            <span className='success-message'>
              {success}
            </span>
          )}
          <button type='submit' className='btn btn-primary'>
            Change Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;