import "./groupitem.css";

import { useNavigate } from "react-router-dom";
import Avater from "./Avater";

const GroupItem = ({ group }) => {
  let navigate = useNavigate();

  return (
    <div className="g-item" onClick={() => navigate(`/chat/${group._id}`)}>
      <Avater title={group.name} size={50} />

      <div className="g-content">
        <div className="g-name">{group.name}</div>
        <div className="g-message">
          <span className="g-mamber-name">Creator: </span>
          <span className="g-mamber-text">{group.creator.name}</span>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
