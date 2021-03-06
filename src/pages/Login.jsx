import React, { useState } from "react";
import axios from "../helper/axios";
import { Link, Navigate, useSearchParams } from "react-router-dom";

import Divider from "../components/Divider";
import Loader from "../components/Loader";

const user = JSON.parse(localStorage.getItem("user"));

const Login = () => {
  let [params] = useSearchParams();
  let [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    const fd = new FormData(e.target);

    const email = fd.get("email");
    const pass = fd.get("password");

    setLoading(true);

    // make a http request
    axios
      .post("/auth/login", {
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

  const content = (
    <>
      {loading ? <Loader /> : null}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 py-5">
            <h1 className="mb-4 text-center">Group Chat app demo</h1>

            <div className="card">
              <div className="card-header">Login with email address</div>

              <div className="card-body">
                {params.get("msg") ? (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    {params.get("msg")}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email..."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter your password..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>

            <Divider />

            <div className="d-flex justify-content-center">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return user ? <Navigate to="/" /> : content;
};

export default Login;
