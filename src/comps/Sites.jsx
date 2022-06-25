import SiteItem from "./SiteItem";
import Axios from "axios";
import { useState } from "react";

export default function Sites() {
  const [sites, setSites] = useState([]);

  const getSites = () => {
    Axios.get("https://ar-backend-ua6tbwojpa-uc.a.run.app/api/sites", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setSites(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(localStorage.getItem("token"));
  getSites();

  return (
    <section class="text-gray-600 body-font">
      <div className="p-4">
        <h1 className="text-4xl font-large title-font mb-4 text-gray-900">
          Hey partner {localStorage.getItem("user").firstname}
        </h1>
        <p className="text-base leading-relaxed text-gray-600">
          Here are the sites you have access to
        </p>
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {sites.map((site) => {
            return <SiteItem site={site} />;
          })}
        </div>
      </div>
    </section>
  );
}