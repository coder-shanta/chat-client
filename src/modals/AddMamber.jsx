import Avater from "../components/Avater";
import addIcon from "../assets/plus-lg.svg";

const AddMamber = () => {
  return (
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
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Search:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  placeholder="Name or email address..."
                  autoComplete="off"
                />
              </div>

              <div className="user">
                <Avater title="A" />
                <div className="info">
                  <div className="name">Shanto Miah</div>
                  <div className="joined">Joined: 22/04/2011</div>
                </div>
                <div className="add">
                  <img src={addIcon} alt="Add" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMamber;
