import React from "react";

let getJournalData = () => {
  let data = {
    name: document.getElementById("journal-detail-title").value,
    description: document.getElementById("journal-detail-description").value,
  };
  return data;
};

const changeJournalDetail = async (id) => {
  let data = getJournalData();

  let requestPackage = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let response = await fetch(
    `http://localhost:3002/items/${id}`,
    requestPackage
  );

  let resolve = await response.json();
  console.log(`New data: ${resolve[1]}`);
};

const deleteJournalDetail = async (id) => {
  let data = getJournalData();
  let requestPackage = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let response = await fetch(
    `http://localhost:3002/items/${id}`,
    requestPackage
  );

  let resolve = await response.json();
};

const JournalDetail = (props) => {
  let { curJournal } = props;

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
            value={curJournal.description}
          ></textarea>
          <hr />
        </div>
        <div className="float-right">
          <button
            className="btn btn-primary mr-3"
            onClick={changeJournalDetail(2)}
          >
            Save
          </button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
