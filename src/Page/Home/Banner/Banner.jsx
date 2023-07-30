/* eslint-disable no-underscore-dangle */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Banner = () => {
  const [banners, setBanner] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-sport-school-server.vercel.app/banner")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="lg:min-h-screen">
      <div className="carousel w-full">
        {banners.map((banner) => (
          <div key={banner._id} id={banner.id} className="carousel-item relative w-full">
            <img src={banner.img_banner} className=" w-full lg:h-[600px] 2xl:h-[800px] " alt="banner" />
            <div className="absolute  text-white  inset-0   bg-gray-900  bg-opacity-70  ">
              <div className="lg:left-[15%] 2xl:left-[25%] left-[27%] top-1/4  absolute">
                <div className="hidden lg:block space-y-4">
                  <motion.h2 className="lg:text-6xl 2xl:text-7xl lg:w-[600px] 2xl:w-[800px] font-bold  tracking-wide leading-[10rem]">{banner.title}</motion.h2>
                  <p className="text-3xl ">{banner["sub-title"]}</p>
                </div>
                <div className="lg:hidden space-y-4">
                  <h2 className=" font-bold text-lg">20% Flat Off On Enroll</h2>
                </div>
                <div className=" mt-8">
                  <button type="button" className="btn-camp">
                    Enroll NOw
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={banner.previous} className="btn  btn-circle border-0 bg-white bg-opacity-20 hover:bg-[#848c2f] ">
                <FiArrowLeft className="w-6 h-6" />
              </a>
              <a href={banner.next} className="btn btn-circle border-0  bg-[#848c2f] hover:bg-white hover:bg-opacity-20">
                <FiArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
