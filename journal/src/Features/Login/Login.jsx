import React from "react";

//kiểm tra xem có đăng nhập đúng user và pass hay chưa
const loginCheck = (changeLoginState) => {
  let inputData = {
    name: document.getElementById("user-name").value,
    password: document.getElementById("user-password").value,
  };

  //vì set cứng user và pass là "admin" nên
  if (inputData.name == "admin" && inputData.password == "admin")
    //thay đổi state của logged in, để cho bên App.js tự redirect
    changeLoginState();
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
          <p className="lead"> Username: admin - Password: admin</p>
          <hr />
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
