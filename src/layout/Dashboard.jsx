/* eslint-disable comma-dangle */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */

import { FaAngleRight, FaDiagnoses, FaHome, FaUserEdit, FaUserPlus, FaUsers, FaUsersCog, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import selected from "../assets/selected.png";

import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  const { user } = useAuth();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="flex justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-boss drawer-button lg:hidden ">
            Open drawer
          </label>
        </div>
        <Outlet />
      </div>

      <div className="drawer-side lg:pr-10 text-white bg-[#2A3F54]">
        <label htmlFor="my-drawer-2" className="drawer-overlay" />

        <ul className="menu  px-6 w-80 mt-4">
          <div className="mb-4  flex gap-4  items-center ">
            <li>
              <NavLink to="/">
                <FaHome className="w-10 h-10  text-lime-600" />
              </NavLink>
            </li>
            <p className="py-0  font-bubblegum font-semibold tracking-widest text-lg uppercase">SportsRookieCamp</p>
          </div>

          <div className="mb-10 flex  gap-8  items-center ">
            <div className="pl-2">
              <img className="w-10 h-10 rounded-full ring-offset-2 ring-2 ring-secondary" src={user?.photoURL} alt="" />
            </div>
            <div className="space-y-1">
              <p className="font-light tracking-widest capitalize">Welcome</p>
              <p className="font-semibold tracking-widest  ">{user?.displayName}</p>
            </div>
          </div>

          <hr className="w-full h-0.5 mx-auto my-4  border-0 rounded " />
          {isAdmin && (
            <div className="space-y-4">
              <p className="uppercase font-semibold">Admin Dashboard</p>
              <li>
                <NavLink className="active:bg-transparent" to="/dashboard/manageClass">
                  <FaUsersCog className="w-5 h-5" /> <span className="font-cinzel font-semibold">Manage Classes</span>
                  <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <FaUsers className="w-5 h-5" /> <span className="font-cinzel font-semibold">Manage Users</span> <FaAngleRight />
                </NavLink>
              </li>
            </div>
          )}

          {isInstructor && (
            <div className="space-y-4">
              <li>
                <NavLink to="/dashboard/addClass">
                  <FaUserEdit className="w-5 h-5" /> <span className="font-cinzel font-semibold">Add a Class</span> <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/teacherClass">
                  <FaDiagnoses className="w-5 h-5" /> <span className="font-cinzel font-semibold">My Classes</span>
                  <FaAngleRight />
                </NavLink>
              </li>
            </div>
          )}

          {!isAdmin && !isInstructor && (
            <div className="space-y-4">
              <li>
                <NavLink to="/dashboard/studentClasses">
                  <img className="w-5 h-5" src={selected} alt="" />
                  <span className="font-cinzel font-semibold">My Selected Classes</span> <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClass">
                  <FaUserPlus className="w-5 h-5" /> <span className="font-cinzel font-semibold">My Enrolled Classes</span> <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet className="w-5 h-5" /> <span className="font-cinzel font-semibold">Payment History</span> <FaAngleRight />
                </NavLink>
              </li>
            </div>
          )}

          {/* hr  */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
