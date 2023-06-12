import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import PageTitle from "../../../components/pageTitle/PageTitle";

const ClassPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allClass").then((data) => {
      setClasses(data.data);
    });
  });
  return (
    <div>
      <h2 className="text-center uppercase font-extrabold text-4xl mt-10 text-[#422c18]">On the Field Embracing the Thrill of Sports</h2>
      <div className="grid gap-4 lg:grid-cols-3 camp-container">
        <PageTitle title="item" />
        {classes.map((item) => (
          <div key={item._id} className="card w-full  ">
            <div className="relative ">
              <figure>
                <img className="h-96  border object-cover rounded-3xl w-full" src={item.photo} alt="" />
              </figure>
            </div>
            <div className="card-body overflow-hidden hover:overflow-visible  hover:h-72 duration-500 hover:duration-500  h-36 inset-x-0 bottom-0 rounded-b-3xl absolute bg-[#dd5449] ">
              <h2 className=" text-white text-3xl font-bold text-center capitalize">{item.ClassName}</h2>
              <h2 className=" text-white text-lg font-bold text-center capitalize">Instructor {item.name}</h2>
              <h2 className=" text-white text-lg font-bold text-center capitalize">Available seats {item.seats}</h2>

              <h2 className=" text-white text-2xl font-bold text-center capitalize">${item.price}</h2>
              <div className="flex overflow-hidden hover:overflow-visible justify-center">
                <button type="button" className="btn-camp ">
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassPage;
