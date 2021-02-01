import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login-wrapper">
        <div className="login-form">
          <div className="form-group">
            <label>Username</label>
            <br />
            <input
              className="title-input-field"
              placeholder="Username"
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <br />
            <input
              className="title-input-field"
              placeholder="Password"
              type="password"
            ></input>
          </div>
          <div>
            <button className="button-save-journal">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
