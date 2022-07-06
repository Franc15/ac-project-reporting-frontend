import Axios from "axios";
import { API_URL } from "../utils/links";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "./Modal";

function Item(props) {
  const [isDisabled, setIsDisabled] = useState();
  // const [currentQuarter, setCurrentQuarter] = useState("");
  const [isDone, setIsDone] = useState();
  const [showModal, setShowModal] = useState(false);

  const getDetails = () => {
    Axios.get(
      `${API_URL}/record/check/${props.item.id}/${localStorage.getItem(
        "current-quarter"
      )}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        console.log(res);
        if (res.data.norecord) {
          console.log("It's a new record");
          setIsDisabled(false);
        } else {
          // checkbox.checked = true;
          setIsDone(true);
          setIsDisabled(true);
          console.log("Records added already");
        }
        // setIsDisabled(res.data.isDisabled);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const displayModal = () => {
    setShowModal(true);
  };

  const handleClick = () => {
    const checkbox = document.getElementById("checkbox" + props.item.id);
    // check if checkbox is checked
    if (checkbox.checked) {
      Axios.post(
        `${API_URL}/record/add`,
        {
          ac_id: props.item.id,
          quarter: localStorage.getItem("current-quarter"),
          date_done: new Date().toISOString().slice(0, 10),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return isDone ? (
    <div className="p-2 lg:w-1/5 md:w-1/4 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <div className="flex-grow">
          <label class="block text-gray-800 font-bold">
            <input
              class="mr-2 leading-tight"
              id={"checkbox" + props.item.id}
              value={props.item.id}
              type="checkbox"
              // onChange={handleClick}
              onChange={displayModal}
              disabled={isDisabled}
            />
            <span class="text-sm line-through">{`${props.item.brand_name} - ${props.item.type_name} - ${props.item.btu}`}</span>
          </label>
        </div>
        <p id={"feed" + props.item.id}></p>
      </div>
    </div>
  ) : (
    <div className="p-2 lg:w-1/5 md:w-1/4 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <div className="flex-grow">
          <label class="block text-gray-800 font-bold">
            <input
              class="mr-2 leading-tight"
              id={"checkbox" + props.item.id}
              value={props.item.id}
              type="checkbox"
              // onChange={handleClick}
              onChange={displayModal}
              disabled={isDisabled}
            />
            <span class="text-sm">{`${props.item.brand_name} - ${props.item.type_name} - ${props.item.btu}`}</span>
          </label>
        </div>
        <>
          {showModal ? (
            <Modal
              hideModal={hideModal}
              handleClick={handleClick}
              id={props.item.id}
              quarter={localStorage.getItem("current-quarter")}
            />
          ) : null}
        </>
      </div>
    </div>
  );
}
export default Item;
