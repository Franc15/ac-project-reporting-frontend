import Item from "./Item";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/links";

export default function MainItems() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  //   Axios.get(`${API_URL}/sites/${siteid}/${floorid}/${roomid}`, {)
  const getItems = async () => {
    Axios.get(`${API_URL}/ac/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            List of Air Conditioners
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is the list of ACs in the room
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          {items.length > 0 &&
            items.map((item) => {
              return <Item item={item} />;
            })}
        </div>
      </div>
    </section>
  );
}
