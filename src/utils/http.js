import axios from "axios";
import {getAuthCredentials} from "./auth"

const http = axios.create({
  timeout: 30000,
  baseURL:"https://laundryhub-5r23.onrender.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
if(getAuthCredentials){
  http.interceptors.request.use(
    (config) => {
      const { token } = getAuthCredentials();
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

}


export default http;
