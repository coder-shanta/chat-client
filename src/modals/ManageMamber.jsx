import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avater from "../components/Avater";
import threeDotsIcon from "../assets/three-dots-vertical.svg";

const ManageMamber = ({ mambers }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    mambers.forEach((m) => {
      if (user._id == m._id) {
        setAdmin(m.admin);
      }
    });
  }, [mambers]);

  return (
    <div className="modal fade" id="manageMamberModel">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Manage mamber</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="users">
              {mambers.map((mamber, idx) => {
                return (
                  <div className="user" key={idx}>
                    <Avater title="A" color={mamber.avaterColor} />
                    <div className="info">
                      <div className="name">
                        {mamber.name} {user.id == mamber._id ? "(You)" : null}
                      </div>
                      <div className="joined">
                        {mamber.admin ? "Admin" : "Mamber"}
                      </div>
                    </div>

                    {admin ? (
                      <div className="add">
                        <div className="dropstart">
                          <img
                            src={threeDotsIcon}
                            alt="menu"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          />

                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a
                                className={`dropdown-item ${
                                  mamber.admin ? null : "disabled"
                                }`}
                                href="#"
                              >
                                Make Mamber
                              </a>
                            </li>
                            <li>
                              <a
                                className={`dropdown-item ${
                                  mamber.admin ? "disabled" : null
                                }`}
                                href="#"
                              >
                                Make Admin
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMamber;
