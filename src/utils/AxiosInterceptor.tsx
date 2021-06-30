import axios from 'axios';
const Axios = axios;
Axios.interceptors.request.use(function (config) {
  // const user = JSON.parse(localStorage.getItem('userInfo') as string)
  // const token = user.token
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default Axios;
