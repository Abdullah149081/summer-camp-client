/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

import useInstructor from "../Hooks/useInstructor";
import logo from "/logo.png";

const StudentRoute = ({ children }) => {
  const { loading } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen justify-center mt-4 items-center">
        <div>
          <img className="w-60" src={logo} alt="" />
        </div>
        <h2 className="text-4xl font-bold mt-4  animate-pulse">SportsRookieCamp</h2>
      </div>
    );
  }

  if (!isAdmin && !isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default StudentRoute;
