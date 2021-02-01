import React from "react";

let sendData = async () => {
  let data = {
    name: document.getElementById("journal-title").value,
    description: document.getElementById("journal-description").value,
  };

  let requestPackage = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let response = await fetch("http://localhost:3002/items", requestPackage);
  let resolve = await response.json();
};

const NewJournalForm = () => {
  return (
    <div className="container">
      <div className="journal-detail-form">
        <div className="form-group">
          <label className="text-dark lead font-weight-bold">Title</label>
          <hr />
          <input
            className="title-input-field"
            placeholder="Journal Title"
            id="journal-title"
            value="bla bla"
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
            id="journal-description"
          ></textarea>
          <hr />
        </div>
        <div className="float-right">
          <button className="btn btn-primary mr-3" onClick={sendData}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewJournalForm;
