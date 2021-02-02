import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//fetch journal mới của user lên DB
let submitNewJournal = async () => {
  let data = {
    name: document.getElementById("journal-title").value,
    description: document.getElementById("journal-description").value,
  };

  let requestPackage = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  await fetch("http://localhost:3002/items", requestPackage)
    .then((response) => {
      toast.success("Your journal has been added successfully !");
    })
    .catch((err) => {
      toast.error("Gửi dữ liệu thất bại ! Hãy start data.json ở port 3002");
    });

  //thay đổi value của 2 cái input về rỗng
  document.getElementById("journal-title").value = "";
  document.getElementById("journal-description").value = "";
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
          <button className="btn btn-primary mr-3" onClick={submitNewJournal}>
            Save
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewJournalForm;
