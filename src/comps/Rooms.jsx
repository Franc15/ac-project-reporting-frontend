import RoomItem from "./RoomItem";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../utils/links";
import { useEffect, useState } from "react";

export default function Rooms() {
  const { siteid, floorid } = useParams();
  console.log("Sites: ", siteid, floorid);
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    Axios.get(`${API_URL}/sites/${siteid}/${floorid}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setRooms(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRooms();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Rooms
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is the list of rooms in this floor
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          {rooms.length > 0 &&
            rooms.map((room) => {
              return <RoomItem room={room} siteid={siteid} floorid={floorid} />;
            })}
        </div>
      </div>
    </section>
  );
}
