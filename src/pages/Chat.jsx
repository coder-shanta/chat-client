import Avater from "../components/Avater";
import "./Chat.css";

import addIcon from "../assets/plus-lg.svg";
import peopleIcon from "../assets/people.svg";
import penIcon from "../assets/pen-fill.svg";

const Chat = () => {
  return (
    <div>
      <div className="header">
        <Avater
          title="Friends Of Friends"
          size={100}
          image="https://i.pravatar.cc/150?img=12"
        />

        <div className="group-name">
          <h2>Friends Of Friends</h2>

          <img className="edit-icon" src={penIcon} />
        </div>

        <div className="buttons">
          <div className="icon-btn">
            <img className="icon" src={addIcon} />
            <div className="text">Add Mamber</div>
          </div>
          <div className="icon-btn">
            <img className="icon" src={peopleIcon} />
            <div className="text">Manage Mamber</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
