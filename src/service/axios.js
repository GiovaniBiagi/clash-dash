import axios from "axios";

const config = axios.create({
  baseURL: "https://clash-dash-backend.herokuapp.com",
});


export default config;