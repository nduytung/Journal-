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

const renderMenu = (loginState, changeLoginState) => {
  if (loginState == true)
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
  let [loginState, setLoginState] = useState(false);
  const changeLoginState = () => {
    setLoginState(!loginState);
    console.log(loginState);
  };
  return (
    <Router>
      <div className="App">
        {renderMenu(loginState, changeLoginState)}

        <div className="MainArea">
          <Switch>
            <Route path="/" exact>
              {loginState == true ? (
                <Redirect to="/my-journal" />
              ) : (
                <LoginPage changeLoginState={changeLoginState} />
              )}
            </Route>
            <Route path="/my-journal">
              {loginState == true ? <JournalList /> : <Redirect to="/" />}
            </Route>
            <Route path="/new-journal">
              {loginState == true ? <NewJournalForm /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
