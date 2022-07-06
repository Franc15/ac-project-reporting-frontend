import { Link } from "react-router-dom";
import { API_URL } from "../utils/links";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function SiteItem(props) {
  const [totalAC, setTotalAC] = useState(0);
  const [totalServiced, setTotalServiced] = useState(0);
  const [currentQ, setCurrentQ] = useState("");

  const getCurrentQ = async () => {
    Axios.get(`${API_URL}/admin/quarter`)
      .then((res) => {
        console.log(res);
        setCurrentQ(res.data[0].quarter_name);
        console.log("CURRENT QUARTER" + res.data[0].quarter_name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTotalServiced = async () => {
    Axios.get(
      `${API_URL}/admin/site/serviced/${props.site.site_id}/${currentQ}`
    )
      .then((res) => {
        console.log(res);
        setTotalServiced(res.data[0].count);
        console.log("TOTLLL" + JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTotalAC = async () => {
    // get the number of ac in this site
    Axios.get(`${API_URL}/admin/ac/site/${props.site.site_id}`)
      .then((res) => {
        // console.log(res.data);
        setTotalAC(res.data[0].count);
        console.log("TOTAL AC" + res.data[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCurrentQ();
    getTotalAC();
    getTotalServiced();
  }, []);

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://img.freepik.com/free-vector/building-concept-illustration_114360-4469.jpg?w=2000"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            EASTERN ZONE
          </h2>
          <h1 className="title-foNament text-lg font-medium text-gray-900 mb-3">
            {props.site.site_name}
          </h1>
          {/* <p className="leading-relaxed mb-3">
            Located in Dar es salaam. At the moment we are working on servicing
            the AC for the third quarter.
          </p> */}
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/floors/${props.site.site_id}`}
              className="text-red-500 hover:text-red-400 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Get in
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-yellow-400 mr-3 font-bold inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              {totalServiced}
            </span>
            <span className="text-green-400 font-bold inline-flex items-center leading-none text-sm">
              {totalAC}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
