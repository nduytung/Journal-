import React from "react";

const JournalDetail = () => {
  return (
    <div>
      <div className="journal-detail-wrapper">
        <div className="journal-detail-form">
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
              placeholder="Journal Description"
            ></textarea>
          </div>
          <div>
            <button className="button-save-journal">Save</button>
            <button className="button-save-journal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
