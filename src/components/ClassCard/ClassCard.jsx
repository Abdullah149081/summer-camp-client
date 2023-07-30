import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useInstructor from "../../Hooks/useInstructor";

const ClassCard = ({ item }) => {
  const { seats, ClassName, name, price, _id, photo, email } = item || {};
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSelectedClass = () => {
    if (user && user.email) {
      axios
        .post("https://summer-camp-sport-school-server.vercel.app/selected", {
          classId: _id,
          name,
          photo,
          price,
          instructorEmail: email,
          ClassName,
          email: user.email,
        })
        .then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              title: "success",
              text: "Class Add successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-full ">
        <div className="relative ">
          <figure>
            <img className="h-96  border object-cover rounded-3xl w-full" src={item.photo} alt="" />
          </figure>
        </div>

        <div
          className={`${
            seats === 0 ? "bg-red-700" : "bg-[#F7941E] "
          } card-body overflow-hidden hover:overflow-visible  hover:h-72 duration-500 hover:duration-500  h-36 inset-x-0 bottom-0  rounded-b-3xl absolute `}
        >
          <h2 className=" text-white text-3xl font-bold text-center capitalize">{ClassName}</h2>
          <h2 className=" text-white text-lg font-bold text-center capitalize">Instructor {name}</h2>
          <h2 className=" text-white text-lg font-bold text-center capitalize">Available seats {seats}</h2>

          <h2 className=" text-white text-2xl font-bold text-center capitalize">${price}</h2>
          <div className="flex overflow-hidden hover:overflow-visible justify-center">
            <button onClick={handleSelectedClass} disabled={seats === 0 || isAdmin || isInstructor} type="button" className="btn-camp ">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
