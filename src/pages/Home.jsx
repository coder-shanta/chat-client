import { Navigate } from "react-router-dom";
import GroupList from "../components/GroupList";

const user = JSON.parse(localStorage.getItem("user"));

const Home = () => {
  const content = (
    <div>
      <h1>Advanced Group Chat App</h1>
      <p>To create a group, just type name and enter.</p>

      <GroupList />

      <br />
      <br />

      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );

  return user ? content : <Navigate to="login" />;
};

export default Home;
