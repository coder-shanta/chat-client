import { useEffect, useState } from "react";

import Avater from "../components/Avater";
import "./Chat.css";
import axios from "../helper/axios";
import { useParams } from "react-router-dom";

import ChatItem from "../components/ChatItem";
import AddMamber from "../modals/AddMamber";
import ManageMamber from "../modals/ManageMamber";

import addIcon from "../assets/plus-lg.svg";
import peopleIcon from "../assets/people.svg";
import penIcon from "../assets/pen-fill.svg";
import sendIcon from "../assets/send.svg";

const Chat = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const params = useParams();
  const [messages, setMessages] = useState([]);
  const [mambers, setMambers] = useState([]);

  useEffect(() => {
    // Get ALl Group mambers
    axios
      .get(`/groups/${params.groupId}/mambers`)
      .then((resp) => {
        setMambers(resp.data);
      })
      .catch((error) => {
        alert(error.message);
      });

    // get All messages
    axios
      .get(`/groups/${params.groupId}/messages`)
      .then((resp) => {
        setMessages(resp.data);
        window.scrollTo(0, document.body.scrollHeight);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [params.groupId]);

  const handleSubmit = (e) => {
    const form = e.target;
    const fd = new FormData(form);

    const message = fd.get("message");

    axios
      .post(`/groups/${params.groupId}/messages`, {
        text: message,
      })
      .then((resp) => {
        const data = resp.data;
        if (data.success) {
          const newM = {
            sender: user,
            text: message,
            createdAt: "22/05/2021 06:31 AM",
            me: true,
          };

          setMessages([...messages, newM]);

          window.scrollTo(0, document.body.scrollHeight);
        } else {
          alert("Unknown error.");
        }
      })
      .catch((error) => {
        alert(error.message);
      });

    form.reset();
    e.preventDefault();
  };

  return (
    <div>
      <AddMamber />
      <ManageMamber mambers={mambers} />

      <div className="header">
        <Avater
          title="Friends Of Friends"
          size={100}
          image="https://i.pravatar.cc/150?img=12"
        />

        <div className="group-name">
          <h2>Friends Of Friends</h2>

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
          {messages.map((m, idx) => (
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
                  autoFocus
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
};

export default Chat;
