/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "/logo.png";

const Footer = () => {
  return (
    <div className="bg-[url('footer.png')] bg-no-repeat bg-cover lg:h-[700px]">
      <div className="pt-[200px] pb-[50px] lg:pt-[350px] ">
        <div className="px-10 lg:px-0 flex flex-col lg:flex-row justify-around gap-6  ">
          <div className="">
            <img className="w-20" src={logo} alt="" />
            <h2 className="text-4xl font-bold text-gray-800 mt-2 font-bubblegum">SportsRookieCamp</h2>
            <div className="flex  gap-3 mt-6">
              <button className="social-icon " type="button">
                <FaFacebookF className="w-4 h-4  text-black hover:text-white" />
              </button>
              <button className="social-icon" type="button">
                <FaTwitter className="w-4 h-4  text-black hover:text-white" />
              </button>
              <button className="social-icon" type="button">
                <FaLinkedinIn className="w-4 h-4  text-black hover:text-white" />
              </button>
              <button className="social-icon" type="button">
                <FaInstagram className="w-4 h-4  text-black hover:text-white" />
              </button>
            </div>
          </div>
          <div className="text-white ">
            <h2 className="text-2xl mb-4  font-bubblegum">Pages</h2>
            <ul className="space-y-3 camp-footer font-semibold ">
              <li>About us</li>
              <li>Our Team</li>
              <li>News Feed</li>
            </ul>
          </div>
          <div className="text-white ">
            <h2 className="text-2xl mb-4 font-bubblegum">Help</h2>
            <ul className="space-y-3 camp-footer font-semibold">
              <li>Return Policy</li>
              <li>F.A.Q</li>

              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-11 px-10 lg:px-0 ">
          <p className="text-center text-white font-bold">
            Copyright &copy; 2023 by <span className="text-yellow-500">SportsRookieCamp</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
