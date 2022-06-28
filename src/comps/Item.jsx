import Axios from "axios";
import { API_URL } from "../utils/links";
import { useState } from "react";
import { useEffect } from "react";

export default function Item(props) {
  const [isDisabled, setIsDisabled] = useState();
  const [isDone, setIsDone] = useState();

  const getDetails = () => {
    Axios.get(`${API_URL}/record/check/${props.item.id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
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

  useEffect(() => {
    getDetails();
  }, []);

  const handleClick = () => {
    const checkbox = document.getElementById("checkbox" + props.item.id);
    // check if checkbox is checked
    if (checkbox.checked) {
      Axios.post(
        `${API_URL}/record/add`,
        {
          ac_id: props.item.id,
          quarter: 3,
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
        <div className="flex-grow bg-red-300">
          <label class="block text-gray-800 font-bold">
            <input
              class="mr-2 leading-tight"
              id={"checkbox" + props.item.id}
              value={props.item.id}
              type="checkbox"
              onChange={handleClick}
              disabled={isDisabled}
            />
            <span class="text-sm">{`${props.item.brand_name} - ${props.item.type_name} - ${props.item.btu}`}</span>
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
              onChange={handleClick}
              disabled={isDisabled}
            />
            <span class="text-sm">{`${props.item.brand_name} - ${props.item.type_name} - ${props.item.btu}`}</span>
          </label>
        </div>
        <p id={"feed" + props.item.id}></p>
      </div>
    </div>
  );
}
