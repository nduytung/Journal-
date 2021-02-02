import React, { useEffect, useState } from "react";
import JournalDetail from "./JournalDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//render ra list bên phải
const renderJounalItems = (items, setCurJournal) => {
  let itemArr = [];
  //Nếu vẫn chưa có journal nào để hiển thị
  if (items.length === 0)
    return (
      <div className="text-secondary mt-5 text-center col-12">
        You have no journal yet
      </div>
    );
  //nếu đã có
  else
    itemArr = items.map((item) => {
      return (
        <li
          className="journal-item mt-2 mb-2 lead p-3"
          onClick={() =>
            //SET ITEM NÀY THÀNH ITEM DC HIỂN THỊ Ở DETAIL KHI CLICK VÀO
            //và truyền xuôngs cho journalDetaill
            setCurJournal({
              id: item.id,
              name: item.name,
              description: item.description,
            })
          }
        >
          {item.name}
        </li>
      );
    });

  return itemArr;
};

//fetch data từ DB về
const getData = async () => {
  let response = await fetch("http://localhost:3002/items");
  let data = await response.json();
  return data;
};

const JournalList = () => {
  let [journalItems, setJournalItems] = useState([]); //chứa các journal trả về từ DB
  let [refresh, setRefresh] = useState(false); //refetch lại mỗi lần có thay đổi
  let [curJournal, setCurJournal] = useState({
    //truyền xuống cho detail, để xác định detail hiển thị gì
    id: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    getData()
      .then((response) => setJournalItems(response))
      .catch((err) => {
        toast.error(
          "Fetch dữ liệu thất bại ! Hãy chắc chắn rằng bạn đã start file data.json ở port 3002"
        );
      });
    setRefresh(false);
  }, [refresh]);
  //mỗi lần tham số refresh thay đổi (tức là bên detail có chỉnh sửa gì đó),
  //thì data sẽ dc fetch lại

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
          <JournalDetail
            curJournal={curJournal}
            setCurJournal={setCurJournal}
            setRefresh={setRefresh}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JournalList;
