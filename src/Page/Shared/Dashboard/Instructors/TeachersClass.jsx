import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const TeachersClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes } = useQuery(["class"], async () => {
    const res = await axiosSecure.get(`/class/${user?.email}`);
    return res.data;
  });

  return (
    <div className="w-full">
      <div className="camp-container">
        <div>
          <div className="bg-[#FFFFFF] border p-4 lg:p-10 rounded-lg  ">
            <div className="overflow-x-auto ">
              <table className="table w-full mt-10 text-center  table-pin-rows">
                <thead>
                  <tr>
                    <th className="bg-gray-700 uppercase rounded-tl-md text-white tracking-wide">#</th>
                    <th className="bg-gray-700 uppercase text-white tracking-wide">Class Image</th>
                    <th className="bg-gray-700 uppercase text-white tracking-wide">Class name</th>
                    <th className="bg-gray-700 uppercase text-white tracking-wide">Enrolled Students</th>

                    <th className="bg-gray-700 uppercase text-white tracking-wide">Available seats</th>
                    <th className="bg-gray-700 uppercase text-white tracking-wide">Price</th>
                    <th className="bg-gray-700 uppercase  text-white tracking-wide">Status</th>
                    <th className="bg-gray-700 uppercase  text-white tracking-wide"> feedback</th>
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
                      <td className=" font-semibold">{item.enrolled || 0}</td>

                      <th>{item.seats}</th>
                      <th>${item.price}</th>
                      <th>
                        <span className={`${item.status === "pending" && "bg-pink-500"} ${item.status === "deny" && "bg-red-600"} p-3 badge badge-ghost badge-sm  capitalize`}>{item.status}</span>
                      </th>
                      <th>{item.feedback || ""}</th>
                      <th className="flex gap-2">
                        <button type="button" className="btn-camp">
                          Update
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

export default TeachersClass;
