import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

const user = JSON.parse(localStorage.getItem("user"));

if (user !== null) {
  axios.defaults.headers.Authorization = `Bearer ${user.token}`;
}

// Error handler
axios.interceptors.response.use(
  (resp) => {
    return resp;
  },
  (outerError) => {
    try {
      if (outerError.response.status === 401) {
        localStorage.clear();
        window.location.href = "/login?msg=Session%20Expired.";
      } else {
        alert(outerError.message);
      }
    } catch (error) {
      alert(outerError.message);
    }

    return Promise.reject(outerError);
  }
);

export default axios;
