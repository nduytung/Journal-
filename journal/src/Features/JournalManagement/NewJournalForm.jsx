import React from "react";

const NewJournalForm = () => {
  return (
    <div>
      <div className="new-journal-wrapper">
        <h2>New Journal</h2>

        <div className="new-journal-form">
          <div className="form-group">
            <label>Title</label>
            <br />
            <input
              className="title-input-field"
              placeholder="Journal Title"
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              className="description-input-field"
              rows="10"
              cols="50"
              placeholder="Journal Description"
            ></textarea>
          </div>
          <div>
            <button className="button-save-journal">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJournalForm;
