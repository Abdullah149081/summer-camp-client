import axios from "axios";
import React, { useEffect, useState } from "react";

import ClassCard from "../../../components/ClassCard/ClassCard";
import PageTitle from "../../../components/pageTitle/PageTitle";

const ClassPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("https://summer-camp-sport-school-server.vercel.app/allClass").then((data) => {
      setClasses(data.data);
    });
  });
  return (
    <div>
      <h2 className="text-center uppercase font-extrabold text-4xl mt-10 text-[#422c18]">On the Field Embracing the Thrill of Sports</h2>
      <div className="grid gap-4 lg:grid-cols-3 camp-container">
        <PageTitle title="ClassPage" />
        {classes.map((item) => (
          <ClassCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ClassPage;
