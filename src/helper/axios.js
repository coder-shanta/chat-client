import axios from "axios";

axios.defaults.baseURL = "https://a4w74e.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:3000/";

const user = JSON.parse(localStorage.getItem("user"));

if (user !== null) {
  axios.defaults.headers.Authorization = `Bearer ${user.token}`;
}

export default axios;
