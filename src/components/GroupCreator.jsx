import axios from "../helper/axios";

const GroupCreator = () => {
  const handleSubmit = (e) => {
    const form = e.target;
    const fd = new FormData(form);

    const name = fd.get("name");

    axios
      .post("/groups", {
        name: name,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        alert(error.message);
      });

    form.reset();
    e.preventDefault();
  };

  return (
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
  );
};
export default GroupCreator;
