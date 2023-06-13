import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useClass from "../../../../Hooks/useClass";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const MySelectedClasses = () => {
  const [join, refetch] = useClass();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selected/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Class has been deleted.", "success");
          }
          refetch();
        });
      }
    });
  };

  return (
    <div>
      <PageTitle title="Dashboard-MySelectedClasses" />
      <div className="w-full">
        <PageTitle title="ManageClass" />
        <div className="camp-container">
          <div>
            <div className=" bg-slate-400 border p-4 lg:p-10 rounded-lg  ">
              <div className="overflow-x-auto ">
                <table className="table w-full mt-10 text-center ">
                  <thead>
                    <tr>
                      <th className="bg-gray-700 uppercase rounded-tl-md text-white tracking-wide">#</th>
                      <th className="bg-gray-700 uppercase text-white tracking-wide">Class Image</th>
                      <th className="bg-gray-700 uppercase text-white tracking-wide">Class name</th>
                      <th className="bg-gray-700 uppercase text-white tracking-wide">Instructor name</th>

                      <th className="bg-gray-700 uppercase text-white tracking-wide">Price</th>

                      <th className="bg-gray-700 uppercase rounded-tr-md text-white tracking-wide">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {join?.map((item, idx) => (
                      <tr key={item._id}>
                        <td className="font-bold">{idx + 1}</td>
                        <td>
                          <div className="flex items-center justify-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className=" font-semibold">{item.ClassName}</td>
                        <td className=" font-semibold">{item.name}</td>

                        <th>${item.price}</th>

                        <th className=" gap-2">
                          <button onClick={() => handleDelete(item._id)} type="button" className="btn-camp">
                            Delete
                          </button>
                          <Link to="/dashboard/payment">
                            <button type="button" className="btn-camp ml-4">
                              pay
                            </button>
                          </Link>
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
    </div>
  );
};

export default MySelectedClasses;
