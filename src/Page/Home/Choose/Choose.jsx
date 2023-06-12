import React from "react";
import certificate from "../../../assets/certificate.png";
import vip from "../../../assets/members.png";
import teacher from "../../../assets/teacher.png";

const Choose = () => {
  return (
    <div className="camp-container">
      <h1 className="text-center mb-24 font-extrabold text-2xl lg:text-5xl mt-10 text-[#422c18]">Why Choose SportsRookieCamp?</h1>
      <div className="grid  lg:grid-cols-3">
        <div className="card  ">
          <figure>
            <img className="w-64" src={certificate} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Get certificate</h2>
          </div>
        </div>
        <div className="card  ">
          <figure>
            <img className="w-64" src={vip} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Get membership</h2>
          </div>
        </div>
        <div className="card  ">
          <figure>
            <img className="w-64" src={teacher} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Become A Teacher</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
