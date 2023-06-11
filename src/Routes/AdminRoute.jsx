/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

import logo from "/logo.png";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col min-h-screen justify-center mt-4 items-center">
        <div>
          <img className="w-60" src={logo} alt="" />
        </div>
        <h2 className="text-4xl font-bold mt-4  animate-pulse">SportsRookieCamp</h2>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
