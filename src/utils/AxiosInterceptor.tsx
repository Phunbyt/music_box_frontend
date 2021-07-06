import axios from "axios";
const Axios = axios;
Axios.interceptors.request.use(function (config) {
//  const token = localStorage.getItem("token");
//  config.headers.Authorization = `Bearer ${token}`;

 return config;
});

export default Axios;
