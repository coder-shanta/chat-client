import { useEffect } from "react";

import Avater from "../components/Avater";
import "./Chat.css";

import ChatItem from "../components/ChatItem";
import AddMamber from "../modals/AddMamber";
import ManageMamber from "../modals/ManageMamber";

import addIcon from "../assets/plus-lg.svg";
import peopleIcon from "../assets/people.svg";
import penIcon from "../assets/pen-fill.svg";
import sendIcon from "../assets/send.svg";

const Chat = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const handleSubmit = (e) => {
    const form = e.target;
    const fd = new FormData(form);

    const message = fd.get("message");

    console.log(message);

    // axios
    //   .post("/groups", {
    //     name: name,
    //   })
    //   .then((resp) => {
    //     console.log(resp.data);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });

    form.reset();
    window.scrollTo(0, document.body.scrollHeight);
    e.preventDefault();
  };

  return (
    <div>
      <AddMamber />
      <ManageMamber />

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
          <ChatItem
            sender="Bot"
            message="Happy New Year 2022."
            date="22/05/2021 06:31 AM"
          />

          <ChatItem
            sender="Shanto"
            message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum veniam quas facilis, laudantium est tempore corporis aliquid ullam nostrum possimus voluptatibus officia doloribus dicta, quod itaque placeat ratione distinctio animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo minus consectetur est, temporibus qui mollitia pariatur repellat eligendi quidem? Veniam voluptates modi nihil quos? Dolores necessitatibus aspernatur nam asperiores nisi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quis quaerat maiores rem corporis voluptas magni tenetur sint iusto at omnis quidem delectus error esse, illo earum, aspernatur, doloribus optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt. Ipsum nihil pariatur vero nemo aliquam sint quis repellendus cum amet dolor, blanditiis quo? Excepturi quas impedit ratione nobis culpa."
            date="22/05/2021 06:31 AM"
          />

          <ChatItem
            sender="You"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nisi asperiores accusantium tempore minus itaque sunt natus aspernatur, ab provident reprehenderit recusandae harum amet eum eos, veniam dignissimos praesentium magni."
            date="22/05/2021 06:31 AM"
            me
          />
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
