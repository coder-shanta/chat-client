import { Navigate, useNavigate } from "react-router-dom";
import GroupList from "../components/GroupList";

const Home = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

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
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );

  return token ? content : <Navigate to="login" />;
};

export default Home;
