/* eslint-disable no-underscore-dangle */
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Banner = () => {
  const banners = [
    {
      _id: "645f1a25cf19b8c585d8612b",
      id: "slide1",
      next: "#slide2",
      previous: "#slide6",
      img_banner: "https://i.ibb.co/88HkHGw/full-shot-kid-with-ball-field.jpg",
      title: "Experience the Thrill of Football this Summer",
      "sub-title": "Join us for Fun and  Learn the Basics of Football",
    },
    {
      _id: "645f1a25cf19b8c585d8612c",
      id: "slide2",
      next: "#slide3",
      previous: "#slide1",
      img_banner: "https://i.ibb.co/njMsqJw/ezgif-com-webp-to-jpg.jpg",
      title: "Discover the Excitement of Cricket this Summer",
      "sub-title": "Join us for Fun and  Learn the Basics of Cricket",
    },
    {
      _id: "645f1a25cf19b8c585d8612d",
      id: "slide3",
      next: "#slide4",
      previous: "#slide2",
      img_banner: "https://i.ibb.co/SBYsYvf/1550024604-kids-rugby.jpg",
      title: "Unleash the Power of Rugby this Summer",
      "sub-title": "Join us for Fun and Learn the Fundamentals of Rugby ",
    },
    {
      _id: "645f1a25cf19b8c585d8612e",
      id: "slide4",
      next: "#slide5",
      previous: "#slide3",
      img_banner: "https://i.ibb.co/TvPK17R/Tennis-City-Parks-Foundation-Summer-Sports.jpg",
      title: "Discover the Joy of Tennis this Summer   ",
      "sub-title": " Join us for Fun and Learn the Fundamentals of Tennis",
    },
    {
      _id: "645f1a25cf19b8c585d8612f",
      id: "slide5",
      next: "#slide6",
      previous: "#slide4",
      img_banner: "https://i.ibb.co/C6Q8R6z/1200x0.jpg",
      title: "Unleash the Power of Rugby this Summer",
      "sub-title": "Join us for Fun and Learn the Fundamentals of Rugby ",
    },
    {
      _id: "645f1a25cf19b8c585d86130",
      id: "slide6",
      next: "#slide1",
      previous: "#slide5",
      img_banner: "https://i.ibb.co/1sHrCp5/ezgif-com-webp-to-jpg-1.jpg",
      title: "Soar into Fun with Frisbee this Summer ",
      "sub-title": "Join us for Exciting Games and Learn  the Art of Frisbee",
    },
  ];

  return (
    <div className="lg:min-h-screen">
      <div className="carousel w-full">
        {banners.map((banner) => (
          <div key={banner._id} id={banner.id} className="carousel-item relative w-full">
            <img src={banner.img_banner} className=" w-full lg:h-[600px] 2xl:h-[800px] " alt="banner" />
            <div className="absolute  text-white  inset-0   bg-gray-900  bg-opacity-70 ">
              <div className="lg:left-[15%] 2xl:left-[25%] left-[27%] top-1/4  absolute">
                <div className="hidden lg:block space-y-4">
                  <h2 className="lg:text-6xl 2xl:text-7xl lg:w-[600px] 2xl:w-[800px] font-bold  tracking-wide leading-[10rem]">{banner.title}</h2>
                  <p className="text-3xl">{banner["sub-title"]}</p>
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
