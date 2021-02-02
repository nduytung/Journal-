import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
const loginCheck = async (changeLoginState) => {
  let inputData = {
    name: document.getElementById("user-name").value,
    password: document.getElementById("user-password").value,
  };

  let response = await fetch("http://localhost:3003/users");
  let data = await response.json();

  data.map((item) => {
    if (item.name == inputData.name && item.password == inputData.password) {
      changeLoginState();
    }
  });
};

const Login = (props) => {
  let { changeLoginState } = props;
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <div className="col-5 m-auto p-5 login-wrapper">
          <h1 className="login-header">Login to continue </h1>
          <div>
            <br />
            <input
              className=" col-12 form-control"
              placeholder="Username"
              type="text"
              id="user-name"
            ></input>
          </div>
          <div className="form-group">
            <br />
            <input
              className=" col-12 form-control"
              placeholder="Password"
              type="password"
              id="user-password"
            ></input>
          </div>
          <hr className="mt-5" />
          <div>
            <button
              className="btn btn-primary"
              onClick={() => loginCheck(changeLoginState)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
