import { useEffect, useState, useCallback, useContext } from "react";

import Avater from "../components/Avater";
import "./Chat.css";
import axios from "../helper/axios";
import { useParams, Navigate, useSearchParams } from "react-router-dom";
import { SocketContext } from "../context/socket";

import ChatItem from "../components/ChatItem";
import AddMamber from "../modals/AddMamber";
import ManageMamber from "../modals/ManageMamber";

import addIcon from "../assets/plus-lg.svg";
import peopleIcon from "../assets/people.svg";
import penIcon from "../assets/pen-fill.svg";
import sendIcon from "../assets/send.svg";
import Loader from "../components/Loader";

import moment from "moment";

const user = JSON.parse(localStorage.getItem("user"));

const Chat = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const socket = useContext(SocketContext);
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState({
    name: "Fake name",
    mambers: [],
    messages: [],
  });

  const handleMessageRecived = useCallback(
    (msg) => {
      setGroup({
        ...group,
        messages: [...group.messages, msg],
      });
    },
    [group]
  );

  const handleJoinRoom = useCallback(() => {
    socket.emit("join", params.groupId);
  }, [socket, params.groupId]);

  const handleLeaveRoom = useCallback(() => {
    socket.emit("leave", params.groupId);
  }, [socket, params.groupId]);

  const handleSendMessage = useCallback(
    (text) => {
      socket.emit("sendMessage", {
        from: user._id,
        to: params.groupId,
        text: text,
      });
    },
    [socket, params.groupId]
  );

  useEffect(() => {
    socket.on("getMessage", handleMessageRecived);

    return () => {
      // before the component is destroyed
      // unbind all event handlers used in this component
      socket.off("getMessage", handleMessageRecived);
    };
  }, [socket, handleMessageRecived, handleSendMessage]);

  useEffect(() => {
    axios
      .get(`/groups/${params.groupId}`, {
        params: {
          limit: searchParams.get("limit") || 10,
          skip: searchParams.get("skip") || 0,
        },
      })
      .then((resp) => {
        const data = resp.data;
        setLoading(false);

        if (data.success) {
          setGroup(data.data);
        } else {
          alert(data.message);
        }
      })
      .catch(() => setLoading(false));
  }, [searchParams, params.groupId]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [group.messages]);

  useEffect(() => {
    handleJoinRoom();
  }, [handleJoinRoom]);

  useEffect(() => {
    return () => {
      handleLeaveRoom();
    };
  }, [handleLeaveRoom]);

  const handleSubmit = (e) => {
    const form = e.target;
    const fd = new FormData(form);

    const message = fd.get("message");

    handleSendMessage(message);

    const yourMessage = {
      sender: user,
      text: message,
      createdAt: moment().format(),
    };

    setGroup({
      ...group,
      messages: [...group.messages, yourMessage],
    });

    form.reset();
    e.preventDefault();
  };

  const content = (
    <div>
      {loading ? <Loader /> : null}
      <AddMamber />
      <ManageMamber mambers={group.mambers} />

      <div className="header">
        <Avater
          title="Friends Of Friends"
          size={100}
          image="https://i.pravatar.cc/150?img=12"
        />

        <div className="group-name">
          <h2>{group.name}</h2>

          <img className="edit-icon" alt="edit" src={penIcon} />
        </div>

        <div className="buttons">
          <div
            className="icon-btn"
            data-bs-toggle="modal"
            data-bs-target="#addMamberModel"
          >
            <img className="icon" alt="plus" src={addIcon} />
            <div className="text">Add Mamber</div>
          </div>
          <div
            className="icon-btn"
            data-bs-toggle="modal"
            data-bs-target="#manageMamberModel"
          >
            <img className="icon" alt="people" src={peopleIcon} />
            <div className="text">Manage Mamber</div>
          </div>
        </div>
      </div>

      <main className="row justify-content-center">
        <div className="chats col-md-8">
          {group.messages.map((m, idx) => (
            <ChatItem
              key={idx}
              sender={m.sender}
              message={m.text}
              date={m.createdAt}
              me={user._id === m.sender._id}
            />
          ))}
        </div>
      </main>

      <form onSubmit={handleSubmit} className="chat-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="Type you message..."
                  autoComplete="off"
                />
                <button type="submit" className="btn btn-outline-primary">
                  <img src={sendIcon} alt="send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  return user ? content : <Navigate to="/login" />;
};

export default Chat;
