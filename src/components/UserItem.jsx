import { useParams } from "react-router-dom";
import { useState } from "react";
import "./useritem.css";
import Avater from "./Avater";
import axios from "../helper/axios";
import addIcon from "../assets/plus-lg.svg";
import checkIcon from "../assets/check.svg";

const UserItem = ({ user }) => {
  const params = useParams();

  const [added, setAdded] = useState(false);
  const [adding, setAdding] = useState(false);

  const addToGroup = () => {
    setAdding(true);

    axios
      .post("/groups/add", {
        groupId: params.groupId,
        userId: user._id,
      })
      .then((resp) => {
        const data = resp.data;

        if (data.success) {
          setAdded(true);
        } else {
          setAdding(false);
          alert(data.message || data.error.userId);
        }
      })
      .catch((error) => {
        alert("error");

        setAdding(false);
        alert(error.message);
      });
  };

  const userClass = `user ${added ? "added" : adding ? "adding" : null}`;

  return (
    <div className={userClass}>
      <Avater title="A" color={user.avaterColor} />
      <div className="info">
        <div className="name">{user.name}</div>
        <div className="joined">Joined: 22/04/2011</div>
      </div>

      {added ? (
        <div className="icon" onClick={addToGroup}>
          <img src={checkIcon} alt="checked" />
        </div>
      ) : adding ? null : (
        <div className="icon add" onClick={addToGroup}>
          <img src={addIcon} alt="Add" />
        </div>
      )}
    </div>
  );
};

export default UserItem;
