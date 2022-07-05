import { API_URL } from "../utils/links";
import Axios from "axios";
import { useState } from "react";

export default function Modal(props) {
  const [remarks, setRemarks] = useState("");
  const [replaced, setReplaced] = useState("");

  const saveRecord = () => {
    Axios.post(
      `${API_URL}/record/add`,
      {
        ac_id: props.id,
        quarter: 3,
        date_done: new Date().toISOString().slice(0, 10),
        remarks: remarks,
        replaced: replaced,
        user: JSON.parse(localStorage.getItem("user")).username,
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
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Mark AC</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => props.hideModal()}
            >
              <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                x
              </span>
            </button>
          </div> */}
          <div className="flex-1 p-5 flex p-4 flex-col">
            <h4 className="text-gray-900 font-bold text-xl mb-2">
              Are you sure you want to save this?
            </h4>
            <textarea
              className="
                my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Add any replaced parts"
              type="text"
              onChange={(e) => setReplaced(e.target.value)}
              id="parts"
              name="parts"
              rows="3"
              cols="50"
            />
            <textarea
              className="
                my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Any other comment here"
              type="text"
              onChange={(e) => setRemarks(e.target.value)}
              id="remarks"
              name="remarks"
              rows="3"
              cols="50"
            />
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  console.log(
                    JSON.parse(localStorage.getItem("user")).username
                  );
                  saveRecord();
                  props.hideModal();
                }}
              >
                Save
              </button>
              <button
                onClick={() => props.hideModal()}
                className="bg-transparent hover:bg-gray-500 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
