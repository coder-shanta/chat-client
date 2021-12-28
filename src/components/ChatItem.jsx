import Avater from "../components/Avater";

import "./chatitem.css";
const ChatItem = ({ sender, message, date, me }) => {
  if (me) {
    return (
      <div className="my-chat">
        <div>
          <Avater title={sender} />
        </div>

        <div className="my-message">
          <div className="my-date">{date}</div>
          {message}
        </div>
      </div>
    );
  } else {
    return (
      <div className="chat">
        <div>
          <Avater title={sender} />
        </div>

        <div className="message">
          <div className="sender">{sender}</div>
          <div className="date">{date}</div>
          {message}
        </div>
      </div>
    );
  }
};

export default ChatItem;
