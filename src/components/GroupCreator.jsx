import { useState } from "react";

import axios from "../helper/axios";
import Loader from "../components/Loader";

const GroupCreator = ({ afterCreated }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);

    const form = e.target;
    const fd = new FormData(form);

    const name = fd.get("name");

    axios
      .post("/groups", {
        name: name,
      })
      .then((resp) => {
        setLoading(false);

        const data = resp.data;

        if (data.success === true) {
          afterCreated(resp.data);
        } else {
          if (data.error.name) {
            alert("Group Name Can't be blank.");
          } else {
            alert("Failed to make group. Unknown error.");
          }
        }
      })
      .catch((error) => {
        setLoading(false);

        alert(error.message);
      });

    form.reset();
    e.preventDefault();
  };

  return (
    <>
      {loading ? <Loader /> : null}
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter group name..."
            autoFocus
            autoComplete="off"
          />
          <button type="submit" className="btn btn-outline-primary">
            Create
          </button>
        </div>
      </form>
    </>
  );
};
export default GroupCreator;
