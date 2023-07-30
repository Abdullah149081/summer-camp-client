import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard/ClassCard";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("https://summer-camp-sport-school-server.vercel.app/topClass").then((data) => {
      setClasses(data.data);
    });
  });
  console.log(setClasses);
  return (
    <div>
      <h2 className="text-center uppercase font-extrabold text-2xl lg:text-4xl mt-10 text-[#0a6375]">Popular Class</h2>
      <div className="grid gap-4 lg:grid-cols-3 camp-container">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
