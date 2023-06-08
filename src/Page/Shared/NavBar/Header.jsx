/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import ActiveLink from "./ActiveLink";
import logo from "/logo.png";

const Header = () => {
  return (
    <div className="navbar-container">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img alt="Logo" width="64.88" height="32" className="lg:mr-3 " src={logo} />
          <span className="font-bubblegum  self-center whitespace-nowrap lg:text-xl font-semibold dark:text-white ">SportsRookieCamp</span>
        </Navbar.Brand>
        <div className="flex  md:order-2">
          <Dropdown className="mr-6" inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
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
          <li>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/sign-in">Sign In</ActiveLink>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
