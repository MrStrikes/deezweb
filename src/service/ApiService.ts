import axios from "axios";

const API_ENDPOINT =
  "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";

const instance = axios.create({
  baseURL: API_ENDPOINT
});

export default instance;
