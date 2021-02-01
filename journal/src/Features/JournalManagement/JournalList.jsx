import React, { useEffect, useState } from "react";
import JournalDetail from "./JournalDetail";

const renderJounalItems = (items, setCurJournal) => {
  let itemArr = [];
  itemArr = items.map((item) => {
    return (
      <li
        className="journal-item mt-2 mb-2 lead p-3"
        onClick={() =>
          getCurJournal(setCurJournal, {
            name: item.name,
            description: item.description,
          })
        }
      >
        {" "}
        {item.name}
      </li>
    );
  });
  return itemArr;
};

const getData = async () => {
  let response = await fetch("http://localhost:3002/items");
  let data = await response.json();

  return data;
};

const getCurJournal = (setCurJournal, curJournal) => {
  setCurJournal(curJournal);
};

const JournalList = () => {
  let [journalItems, setJournalItems] = useState([]);
  let [curJournal, setCurJournal] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    getData().then((response) => setJournalItems(response));
  }, []);

  return (
    <div className="container">
      <div className="row text-left">
        <div className="col-4 journal-smoke-bg p-4">
          <div className=" text-dark h1 mb-5">Mini Journal</div>
          <div className=" text-primary font-weight-bold lead">
            Your entries
          </div>
          <h3 className="mt-3 lead font-weight-bold">My List</h3>
          <div className="journal-list">
            <ul className="pl-0">
              {renderJounalItems(journalItems, setCurJournal)}
            </ul>{" "}
          </div>
        </div>
        <div className="col-8 bg-white">
          <JournalDetail curJournal={curJournal} />
        </div>
      </div>
    </div>
  );
};

export default JournalList;
