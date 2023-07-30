/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FiLogOut } from "react-icons/fi";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import useInstructor from "../../../Hooks/useInstructor";
import isUser from "../../../assets/user.gif";
import ActiveLink from "./ActiveLink";
import logo from "/logo.png";

const Header = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="bg-nav">
      <div className="navbar-container ">
        <Navbar fluid rounded className="bg-nav">
          <Navbar.Brand>
            <img alt="Logo" width="64.88" height="32" className="lg:mr-3 " src={logo} />
            <span className="font-bubblegum  self-center whitespace-nowrap lg:text-xl font-semibold dark:text-white ">SportsRookieCamp</span>
          </Navbar.Brand>

          <div className="flex  md:order-2">
            {user ? (
              <Dropdown className="mr-6" inline label={<Avatar alt="User settings" img={user?.photoURL} rounded />}>
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user?.email}</span>
                </Dropdown.Header>
                <Dropdown.Item>
                  <button onClick={handleLogOut} type="button" className="text-left w-full ">
                    <span className="inline-flex items-center gap-2 font-extrabold ">
                      <FiLogOut className="w-4 h-4" />
                      logout
                    </span>
                  </button>
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <img className="w-14 h-14 hidden lg:block" src={isUser} alt="" />
            )}
            <Navbar.Toggle />
          </div>

          <Navbar.Collapse>
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/instructors">Instructors</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/classes">Classes</ActiveLink>
            </li>
            {user && (
              <li>
                <ActiveLink to={isAdmin ? "/dashboard/manageUsers" : isInstructor ? "/dashboard/teacherClass" : "/dashboard/studentClasses"}>Dashboard</ActiveLink>
              </li>
            )}

            {!user && (
              <li>
                <ActiveLink to="/login">Sign In</ActiveLink>
              </li>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
