import React, { useState } from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import NewJournalForm from "./Features/JournalManagement/NewJournalForm";
import JournalList from "./Features/JournalManagement/JournalList";
import LoginPage from "./Features/Login/Login";

//render ra các tab và nút logout
//nếu user đã login thì mới hiển thị ra cái này
const renderMenu = (loginState, changeLoginState) => {
  if (loginState === true)
    return (
      <div className="option-area container mt-5 pl-0">
        <NavLink className="tab" to="/my-journal">
          All entries
        </NavLink>
        <NavLink className="tab" to="/new-journal">
          New journal
        </NavLink>
        <button className="tab logout" onClick={changeLoginState}>
          Log out
        </button>
      </div>
    );
  else return <div className="option-area"></div>;
};

const App = () => {
  //trạng thái đăng nhập của người dùng
  let [loginState, setLoginState] = useState(false);

  //hàm truyền xuống cho login component, để thay đổi loginState
  const changeLoginState = () => {
    setLoginState(!loginState);
  };

  return (
    <Router>
      <div className="App">
        {renderMenu(loginState, changeLoginState)}

        <div className="MainArea">
          <Switch>
            {/* KIỂM TRA XEM LOGIN CHƯA, NẾU RỒI THÌ TỰ REDIRECT QUA BÊN MY JOURNAL  */}
            <Route path="/" exact>
              {loginState === true ? (
                <Redirect to="/my-journal" />
              ) : (
                <LoginPage changeLoginState={changeLoginState} />
              )}
            </Route>

            <Route path="/my-journal">
              {/* NẾU CHƯA LOGIN THÌ SẼ BỊ REDIRECT VỀ TRANG LOGIN  */}
              {loginState === true ? <JournalList /> : <Redirect to="/" />}
            </Route>

            <Route path="/new-journal">
              {/* NẾU CHƯA LOGIN THÌ SẼ BỊ REDIRECT VỀ TRANG LOGIN  */}
              {loginState === true ? <NewJournalForm /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
