import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Admin it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/users/admin/${user._id}`).then((data) => {
          if (data.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "success",
              text: `${user.name} is now Admin`,
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
      }
    });
  };

  const handleInstructors = (user) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Instructor it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/users/instructors/${user._id}`).then((data) => {
          if (data.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "success",
              text: `${user.name} is now Instructor`,
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full">
      <PageTitle title="ManageUsers" />
      <div className="camp-container">
        <div>
          <div className="bg-slate-400 rounded-md border p-4 lg:p-20  ">
            <div className="stats shadow bg-pink-600 text-white">
              <div className="stat">
                <div className="stat-title text-gray-900 font-semibold">Total Users</div>
                <div className="stat-value">{users.length || 0}</div>
              </div>
            </div>

            <div className="overflow-x-auto ">
              <table className="table w-full mt-10 text-center ">
                <thead>
                  <tr>
                    <th className="bg-gray-700 rounded-tl-md text-white tracking-wide">#</th>
                    <th className="bg-gray-700 text-white tracking-wide">NAME</th>
                    <th className="bg-gray-700 text-white tracking-wide">EMAIL</th>
                    <th className="bg-gray-700 text-white tracking-wide">ROLE</th>
                    <th className="bg-gray-700 rounded-tr-md text-white tracking-wide">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr key={user._id}>
                      <td className="font-bold">{idx + 1}</td>
                      <td className="text-gray-800 text-lg ">{user.name}</td>
                      <td className="text-gray-800 text-lg ">{user.email}</td>
                      <td className="text-gray-800 text-lg  capitalize">{user.role || "user"}</td>
                      <th className="inline-flex gap-4">
                        <button disabled={user.role === "admin"} onClick={() => handleAdmin(user)} type="button" className="btn-camp ">
                          Admin
                        </button>
                        <button disabled={user.role === "instructors"} onClick={() => handleInstructors(user)} type="button" className="btn-camp ">
                          Instructors
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
