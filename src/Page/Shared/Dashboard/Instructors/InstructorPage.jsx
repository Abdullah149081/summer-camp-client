import { useQuery } from "@tanstack/react-query";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import axios from "axios";
import { useEffect, useState } from "react";

import PageTitle from "../../../../components/pageTitle/PageTitle";

const InstructorPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios.get("https://summer-camp-sport-school-server.vercel.app/users/instructors").then((data) => {
      setInstructors(data.data);
    });
  });

  return (
    <div>
      <h2 className="text-center uppercase font-extrabold text-2xl lg:text-4xl mt-10 text-[#0a6375]">Meet Our Expert Instructors</h2>
      <PageTitle title="Instructor" />
      <div className="grid i gap-4 lg:grid-cols-3 camp-container">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card w-full group ">
            <div className="">
              <figure className="mask-pic">
                <img className="h-96 object-cover w-full group-hover:scale-90 transition duration-300" src={instructor.photo} alt="" />
              </figure>
            </div>
            <div className="card-body -mt-8 ">
              <h2 className="group-hover:text-[#eb1551] transition duration-300 text-[#1cbbb4] text-3xl font-bold text-center capitalize ">{instructor.name}</h2>
              <div className="flex gap-4 mx-auto text-lg  ">
                <MdOutlineMarkEmailRead className="w-6 h-6" />
                <p className="group-hover:text-[#1cbbb4] font-semibold transition duration-300">{instructor.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
