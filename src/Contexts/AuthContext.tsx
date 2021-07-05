/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import axios from 'axios';

interface Props {
  children: ReactNode;
}
interface AuthStatus {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  isloading: boolean;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  login: (email: string, password: string) => void;
  fblogin: () => void;
  googlelogin: () => void;
  signUp: (email: string, password: string, username: string, dateOfBirth: string, gender: string) => void;
  showSignup: boolean;
  showLogin: boolean;
  Hide: () => void;
  setShowSignup: Dispatch<SetStateAction<boolean>>;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
  setIsloading: Dispatch<SetStateAction<boolean>>;
}
export const AuthContext = createContext({} as AuthStatus);
const AuthProvider = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const [showSignup, setShowSignup] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const Hide = () => {
    setShowLogin(false);
    setShowSignup(false);
  };
  async function signUp(email: string, password: string, username: string, dateOfBirth: string, gender: string) {
    try {
      const signUpData = {
        email,
        password,
        username,
        dateOfBirth: dateOfBirth.split('-').join('/'),
        gender,
      };
      setIsloading(true);
      const res = await axios.post('https://musicboxgroupc.herokuapp.com/api/users/signup', signUpData);
      setIsloading(false);
      localStorage.setItem('User', JSON.stringify(res.data));
      Hide();
      setIsLoggedIn(true);
    } catch (err) {
      setIsloading(false);
      err.response.data && err.response.data.message && setError(err.response.data.message);
    }
  }
  async function login(email: string, password: string) {
    try {
      const loginUser = {
        email,
        password,
      };
      setIsloading(true);
      const { data } = await axios.post('https://musicboxgroupc.herokuapp.com/api/users/login', loginUser);
      setIsloading(false);
      localStorage.setItem('User', JSON.stringify(data));
      localStorage.setItem('token', JSON.stringify(data.token));
      Hide();

      setIsLoggedIn(true);
    } catch (err) {
      setIsloading(false);
      err.response.data && err.response.data.message && setError(err.response.data.message);
    }
  }

  async function googlelogin() {
    try {
      setIsloading(true);
      const config = {
        headers: { 'Access-Control-Allow-Origin': '*' },
      };
      const res = await axios.get('https://musicboxgroupc.herokuapp.com/auth/google', config);
      console.log(res);
      setIsloading(false);
      localStorage.setItem('User', JSON.stringify(res));
      localStorage.setItem('token', JSON.stringify(res));
      Hide();

      setIsLoggedIn(true);
    } catch (err) {
      setIsloading(false);
      err.response.data && err.response.data.message && setError(err.response.data.message);
    }
  }

  async function fblogin() {
    try {
      setIsloading(true);
      const res = await axios.get('https://musicboxgroupc.herokuapp.com/auth/facebook');
      setIsloading(false);
      console.log(res);
      localStorage.setItem('User', JSON.stringify(res));
      localStorage.setItem('token', JSON.stringify(res));
      Hide();

      setIsLoggedIn(true);
    } catch (err) {
      setIsloading(false);
      err.response.data && err.response.data.message && setError(err.response.data.message);
    }
  }

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    error,
    isloading,
    login,
    fblogin,
    googlelogin,
    signUp,
    setError,
    showSignup,
    showLogin,
    Hide,
    setShowSignup,
    setShowLogin,
    setIsloading,
  };
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
export default AuthProvider;
