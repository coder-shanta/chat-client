import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

const user = JSON.parse(localStorage.getItem("user"));

if (user !== null) {
  axios.defaults.headers.Authorization = `Bearer ${user.token}`;
}

export default axios;
