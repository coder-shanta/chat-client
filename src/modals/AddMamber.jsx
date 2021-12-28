import { useRef, useState } from "react";
import axios from "../helper/axios";
import Loader from "../components/Loader";
import UserItem from "../components/UserItem";

const AddMamber = () => {
  const refInput = useRef(null);

  const [mambers, setMambers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nf, setNf] = useState(false);

  const handleSubmit = (e) => {
    setNf(false);
    setLoading(true);
    const fd = new FormData(e.target);

    axios
      .get(`/mambers/search/${fd.get("search")}`)
      .then((resp) => {
        setLoading(false);

        if (resp.data.length === 0) {
          setNf(true);
        } else {
          setNf(false);
          setMambers(resp.data);
        }
      })
      .catch((error) => {
        setLoading(false);

        alert(error.message);
      });

    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading ? <Loader /> : null}

      <div className="modal fade" id="addMamberModel">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add mamber</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="users">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Search mamber:
                  </label>
                  <input
                    ref={refInput}
                    type="text"
                    name="search"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Type name or email address..."
                    autoComplete="off"
                    autoFocus
                    onChange={() => {
                      setNf(false);
                      setMambers([]);
                    }}
                  />
                </div>

                {nf ? (
                  <div className="alert alert-warning" role="alert">
                    No user found with:
                    <strong> {refInput.current.value}</strong>
                  </div>
                ) : null}

                {mambers.map((user, idx) => (
                  <UserItem user={user} key={idx} />
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMamber;
