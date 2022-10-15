import axios from "axios";
import { LINKS } from "../constants";

const api = axios.create({
  baseURL: `${LINKS.MIDDLEWARE_API}/api/`,
});

export default api;
