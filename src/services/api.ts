import axios from "axios";

const api = axios.create({
  baseURL: "https://api-sacocheio-tv.000webhostapp.com/api/",
});

export default api;
