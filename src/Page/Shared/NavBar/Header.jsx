/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "/logo.png";

const Header = () => {
  return (
    <div>
      <div>
        <Navbar fluid rounded>
          <Navbar.Brand>
            <img alt="Logo" width="64.88" height="32" className="lg:mr-3 " src={logo} />
            <span className="self-center whitespace-nowrap lg:text-xl font-semibold dark:text-white ">SportsRookieCamp</span>
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
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
