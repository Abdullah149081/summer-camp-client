import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const EnrolledClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: enrolled } = useQuery(["class"], async () => {
    const res = await axiosSecure.get(`/enrolled-classes/${user?.email}`);
    return res.data;
  });

  return (
    <div>
      <PageTitle title="Dashboard-MySelectedClasses" />
      <div className="w-full">
        <PageTitle title="ManageClass" />
        <div className="camp-container">
          <div>
            <div className=" bg-slate-400 border p-4 lg:p-10 rounded-lg  ">
              <div className="stats shadow bg-pink-600 text-white">
                <div className="stat">
                  <div className="stat-title text-gray-900 font-semibold">Total Enrolled</div>
                  <div className="stat-value">{enrolled?.length || 0}</div>
                </div>
              </div>
              <div className="overflow-x-auto ">
                <table className="table w-full mt-10 text-center ">
                  <thead>
                    <tr>
                      <th className="bg-gray-700 uppercase rounded-tl-md text-white tracking-wide">#</th>
                      <th className="bg-gray-700 uppercase text-white tracking-wide">Class Image</th>
                      <th className="bg-gray-700 uppercase text-white tracking-wide">Class name</th>
                      <th className="bg-gray-700 uppercase text-white tracking-wide">Instructor name</th>
                      <th className="bg-gray-700 uppercase text-white tracking-wide">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrolled?.map((item, idx) => (
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
                        <td className=" font-semibold">{item.instructorEmail}</td>

                        <td>${item.price}</td>
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

export default EnrolledClass;
