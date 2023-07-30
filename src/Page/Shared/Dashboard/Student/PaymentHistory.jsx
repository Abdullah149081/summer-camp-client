import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: payment } = useQuery(["payment"], async () => {
    const res = await axiosSecure.get(`/payments-history/${user?.email}`);
    return res.data;
  });

  return (
    <div>
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
                      <th className="bg-gray-700 uppercase text-white tracking-wide">Date</th>

                      <th className="bg-gray-700 uppercase rounded-tr-md text-white tracking-wide">Transaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payment?.map((item, idx) => (
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
                        <th>${item.price}</th>
                        <td className=" font-semibold">{item.date}</td>
                        <td className=" font-semibold">{item.transactionId}</td>
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

export default PaymentHistory;
