import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div>
      <div className="flex items-center justify-center flex-col min-h-screen">
        <img className="lg:w-1/4 " src="https://i.ibb.co/hKxDPBs/7938322-3814348.jpg" alt="" />
        <p className=" text-red-500 font-medium text-2xl">
          <i>{error?.statusText || error?.message}</i>
        </p>
        <Link to="/">
          <button type="button" className="btn btn-secondary">back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
