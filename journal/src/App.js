import React, { useState } from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import NewJournalForm from "./Features/JournalManagement/NewJournalForm";
import JournalList from "./Features/JournalManagement/JournalList";
import LoginPage from "./Features/Login/Login";

const renderMenu = (loginState) => {
  if (loginState == true)
    return (
      <div className="option-area container mt-5 pl-0">
        <NavLink className="tab" to="/my-journal">
          All entries
        </NavLink>
        <NavLink className="tab" to="/new-journal">
          New journal
        </NavLink>
      </div>
    );
  else return <div className="option-area"></div>;
};

const changeLoginState = (loginState, setLoginState) => {
  setLoginState(true);
  console.log(loginState);
};

const App = () => {
  let [loginState, setLoginState] = useState(true);

  return (
    <Router>
      <div className="App">
        {renderMenu(loginState)}

        <div className="MainArea">
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/my-journal">
              <JournalList />
            </Route>
            <Route path="/new-journal">
              <NewJournalForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
