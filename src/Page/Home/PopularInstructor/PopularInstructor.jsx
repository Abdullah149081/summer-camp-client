import axios from "axios";
import { useEffect, useState } from "react";

import { MdOutlineMarkEmailRead } from "react-icons/md";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users/instructors").then((data) => {
      setInstructors(data.data);
    });
  });
  return (
    <div>
      <h2 className="text-center anim uppercase font-extrabold text-2xl lg:text-5xl mt-10 text-[#422c18]">Popular Instructors</h2>
      <div className="grid i gap-4 lg:grid-cols-3 camp-container">
        {instructors.slice(0, 6).map((instructor) => (
          <div key={instructor._id} className="card w-full  ">
            <div className="relative">
              <figure>
                <img className="h-96 border object-cover rounded-3xl w-full" src={instructor.photo} alt="" />
              </figure>
            </div>
            <div className="card-body h-36 inset-x-0 bottom-0 rounded-b-3xl absolute bg-[#dd5449] ">
              <h2 className=" text-white text-3xl font-bold text-center capitalize">{instructor.name}</h2>
              <div className="flex gap-4 mx-auto text-lg  ">
                <MdOutlineMarkEmailRead className="w-6 h-6" />
                <p>{instructor.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
