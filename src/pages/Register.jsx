import React, { useState } from "react";
import axios from "../helper/axios";
import { Link } from "react-router-dom";

import Divider from "../components/Divider";
import Loader from "../components/Loader";

const Register = () => {
  let [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);

    const fd = new FormData(e.target);

    const name = fd.get("name");
    const email = fd.get("email");
    const pass = fd.get("password");

    // make a http request
    axios
      .post("/auth/register", {
        name: name,
        email: email,
        password: pass,
      })
      .then((resp) => {
        setLoading(false);

        const data = resp.data;

        if (data.success === true) {
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "/";
        } else {
          alert(data.message || "Login Failed. (Unknown error)");
        }
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });

    e.preventDefault();
  };

  return (
    <>
      {loading ? <Loader /> : null}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 py-5">
            <h1 className="mb-4 text-center">Group Chat app demo</h1>

            <div className="card shadow">
              <div className="card-header">
                Register, No verification needed.
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name..."
                      defaultValue="Shanta Miah"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email..."
                      defaultValue="test@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter your password..."
                      defaultValue="12345678"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </form>
              </div>
            </div>

            <Divider />

            <div className="d-flex justify-content-center">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
