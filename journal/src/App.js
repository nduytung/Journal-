import React from "react";
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

function App() {
  return (
    <Router>
      <div className="App">
        <div className="TitleArea">
          <h1>Mini Journal App</h1>
        </div>

        {/* KHU VUC CHUYEN TRANG  */}
        <div className="option-area">
          <NavLink className="tab" to="/my-journal">
            All entries
          </NavLink>
          <NavLink className="tab" to="/new-journal">
            New journal
          </NavLink>
        </div>

        <div className="MainArea">
          <Switch>
            <Route path="/">
              {" "}
              <JournalList />{" "}
            </Route>
            <Route path="/new-journal">
              {" "}
              <NewJournalForm />{" "}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
