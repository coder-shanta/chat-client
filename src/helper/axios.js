import axios from "axios";

axios.defaults.baseURL = "https://a4w74e.herokuapp.com/";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
  "token"
)}`;

export default axios;
