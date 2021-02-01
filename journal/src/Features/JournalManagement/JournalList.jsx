import React, { useEffect, useState } from "react";
import JournalDetail from "./JournalDetail";

let renderJounalItems = (items) => {
  let itemArr = [];
  items.map((item) => {
    itemArr.push(<li>{item.name}</li>);
  });
  return itemArr;
};

let getData = async () => {
  let response = await fetch("http://localhost:3002/items");
  let data = await response.json();
  return data;
};

const JournalList = () => {
  let [journalItems, setJournalItems] = useState();
  useEffect(() => {
    getData().then((response) => setJournalItems(response));
  }, []);
  return (
    <div>
      <div className="journal-list-wrapper">
        <header>
          <div className="subTitle">Your entries</div>
          <div className="subTitle">Detail</div>
        </header>
      </div>
      <div className="journal-list-main-area">
        <div className="journal-list">
          <ul>{renderJounalItems(journalItems)}</ul>
        </div>
        <div className="journal-detail">
          <JournalDetail />
        </div>
      </div>
    </div>
  );
};

export default JournalList;
