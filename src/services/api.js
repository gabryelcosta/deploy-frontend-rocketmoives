import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocketmovies-ypm5.onrender.com"
})