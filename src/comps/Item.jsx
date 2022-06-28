import Axios from "axios";
import { API_URL } from "../utils/links";

export default function Item(props) {
  const handleClick = () => {
    // get the checkbox value
    const checkbox = document.getElementById("checkbox" + props.item.id);

    const ac_id = props.item.id;
    const date = new Date("yyyy-MM-dd");
    const quarter = 3;

    // check if checkbox is checked
    if (checkbox.checked) {
      Axios.post(`${API_URL}/record/add`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          ac_id,
          date,
          quarter,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
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
            />
            <span class="text-sm">{`${props.item.brand_name} - ${props.item.type_name} - ${props.item.btu}`}</span>
          </label>
        </div>
        <p id={"feed" + props.item.id}></p>
      </div>
    </div>
  );
}
