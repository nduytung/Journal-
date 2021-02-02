import React from "react";

// SỬA ITEM
const changeJournalDetail = async (id, setRefresh) => {
  let requestPackage = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("journal-detail-title").value,
      description: document.getElementById("journal-detail-description").value,
    }),
  };

  await fetch(`http://localhost:3002/items/${id}`, requestPackage);

  //REFETCH LẠI ĐỂ BÊN LIST HIỂN THỊ CHÍNH XÁC NỘI DUNG
  setRefresh(true);
};

//XÓA ITEM
const deleteJournalDetail = async (id, setRefresh) => {
  let requestPackage = { method: "DELETE" };
  await fetch(`http://localhost:3002/items/${id}`, requestPackage);
  //REFETCH LẠI ĐỂ BÊN LIST HIỂN THỊ ĐÚNG NỘI DUNG
  setRefresh(true);
};

let JournalDetail = (props) => {
  //curJournal là item đang hiển thị detail
  //setCurJournal để thay đổi và curJournal lên database
  //setRefresh để refetch lại mỗi lần detail dc update
  let { curJournal, setCurJournal, setRefresh } = props;

  //DÙNG ĐỂ HANDLE DATA MỖI LẦN NHẬP VÀO INPUT
  let handleChange = (event) => {
    let { name, value } = event.target;
    setCurJournal({ ...curJournal, [name]: value });
  };

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
            //INPUT TRONG REACT PHẢI CÓ VALUE, ONCHANGE VÀ NAME THÌ MÓI EDIT DCDC
            value={curJournal.name}
            name="name"
            onChange={handleChange}
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
            name="description"
            value={curJournal.description}
            onChange={handleChange}
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
