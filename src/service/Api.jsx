import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  responseType: "json",
  headers: {
    Authorization: import.meta.env.VITE_AUTH,
    "Content-Type": "application/json",
    AppVersion: import.meta.env.VITE_VERSION,
  },
});
