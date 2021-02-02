import React, { useEffect, useState } from "react";

const changeJournalDetail = async (id, setRefresh) => {
  let requestPackage = {
    method: "PUT",
    headers: {
      "Content-type": "application/json", // Indicates the content
    },
    body: JSON.stringify({
      name: document.getElementById("journal-detail-title").value,
      description: document.getElementById("journal-detail-description").value,
    }),
  };

  await fetch(`http://localhost:3002/items/${id}`, requestPackage);

  setRefresh(true);
};

const deleteJournalDetail = async (id, setRefresh) => {
  await fetch(`http://localhost:3002/items/${id}`, { method: "DELETE" });

  setRefresh(true);
};

let JournalDetail = (props) => {
  let { curJournal, setRefresh } = props;

  return (
    <div>
      <div className=" text-primary font-weight-bold lead">Journal Detail</div>
      <div className="journal-detail-form">
        <div className="form-group">
          <label className="text-dark lead font-weight-bold">Title</label>
          <hr />
          <input
            className="title-input-field"
            placeholder="Journal Title"
            id="journal-detail-title"
            defaultValue={curJournal.name}
          ></input>
          <hr />
        </div>
        <div className="form-group">
          <label className="text-dark lead font-weight-bold">Description</label>
          <hr />
          <textarea
            className="description-input-field"
            rows="10"
            placeholder="Journal Description"
            id="journal-detail-description"
            defaultValue={curJournal.description}
          ></textarea>
          <hr />
        </div>
        <div className="float-right">
          <button
            className="btn btn-primary mr-3"
            onClick={() => changeJournalDetail(curJournal.id, setRefresh)}
          >
            Save
          </button>
          <button
            className="btn btn-primary"
            onClick={() => deleteJournalDetail(curJournal.id, setRefresh)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
