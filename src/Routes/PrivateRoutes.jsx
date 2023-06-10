/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import logo from "/logo.png";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen justify-center mt-4 items-center">
        <div>
          <img className="w-60" src={logo} alt="" />
        </div>
        <h2 className="text-4xl font-bold mt-4 font-cinzel animate-pulse">SportsRookieCamp</h2>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoutes;
