// import axios from "axios";
// export default axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
//   withCredentials: true,
// });

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export default api;
