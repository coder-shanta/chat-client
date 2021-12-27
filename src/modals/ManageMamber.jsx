import Avater from "../components/Avater";
import threeDotsIcon from "../assets/three-dots-vertical.svg";

const ManageMamber = () => {
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
              <div className="user">
                <Avater title="A" />
                <div className="info">
                  <div className="name">Shanto Miah</div>
                  <div className="joined">Admin</div>
                </div>
                <div className="add">
                  <div class="dropstart">
                    <img
                      src={threeDotsIcon}
                      alt="menu"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item disabled" href="#">
                          Make Mamber
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Make Admin
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="user">
                <Avater title="A" />
                <div className="info">
                  <div className="name">Shanto Miah</div>
                  <div className="joined">Mamber</div>
                </div>
                <div className="add">
                  <div class="dropstart">
                    <img
                      src={threeDotsIcon}
                      alt="menu"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item disabled" href="#">
                          Make Mamber
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Make Admin
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="user">
                <Avater title="A" />
                <div className="info">
                  <div className="name">Shanto Miah</div>
                  <div className="joined">Mamber</div>
                </div>
                <div className="add">
                  <div class="dropstart">
                    <img
                      src={threeDotsIcon}
                      alt="menu"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item disabled" href="#">
                          Make Mamber
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Make Admin
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="user">
                <Avater title="A" />
                <div className="info">
                  <div className="name">Shanto Miah</div>
                  <div className="joined">Admin</div>
                </div>
                <div className="add">
                  <div class="dropstart">
                    <img
                      src={threeDotsIcon}
                      alt="menu"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item disabled" href="#">
                          Make Mamber
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Make Admin
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="user">
                <Avater title="A" />
                <div className="info">
                  <div className="name">Shanto Miah</div>
                  <div className="joined">Mamber</div>
                </div>
                <div className="add">
                  <div class="dropstart">
                    <img
                      src={threeDotsIcon}
                      alt="menu"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item disabled" href="#">
                          Make Mamber
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Make Admin
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item disabled" href="#">
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
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
