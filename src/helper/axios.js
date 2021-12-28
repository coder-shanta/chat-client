import axios from "axios";

axios.defaults.baseURL = "https://a4w74e.herokuapp.com/";

const user = JSON.parse(localStorage.getItem("user"));

if (user !== null) {
  axios.defaults.headers.Authorization = `Bearer ${user.token}`;
}

export default axios;
