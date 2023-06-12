import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const ManageClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes, refetch } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });

  const handleApprove = (item) => {
    axiosSecure
      .patch(`/class/approve/${item._id}`, {
        status: "approve",
      })
      .then((data) => {
        if (data.data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "success",
            text: "Status updated to 'Approved' successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };
  const handleDeny = (item) => {
    axiosSecure
      .patch(`/class/approve/${item._id}`, {
        status: "deny",
      })
      .then((data) => {
        if (data.data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "success",
            text: "Status updated to 'Denied' successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
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
                    <th className="bg-gray-700 uppercase text-white tracking-wide">Instructor email</th>
                    <th className="bg-gray-700 uppercase text-white tracking-wide">Available seats</th>
                    <th className="bg-gray-700 uppercase text-white tracking-wide">Price</th>
                    <th className="bg-gray-700 uppercase  text-white tracking-wide">Status</th>
                    <th className="bg-gray-700 uppercase rounded-tr-md text-white tracking-wide">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {classes?.map((item, idx) => (
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
                      <td className=" font-semibold">{item.email}</td>
                      <th>{item.seats}</th>
                      <th>${item.price}</th>
                      <th>{item.status}</th>
                      <th className="flex gap-2">
                        <button disabled={item.status === "approve"} onClick={() => handleApprove(item)} type="button" className="btn-camp">
                          Approve
                        </button>
                        <button disabled={item.status === "deny"} onClick={() => handleDeny(item)} type="button" className="btn-camp">
                          Deny
                        </button>
                        <Link to={`feedback/${item._id}`}>
                          <button type="button" className="btn-camp">
                            feedback
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
  );
};

export default ManageClass;
