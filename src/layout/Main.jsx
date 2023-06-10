/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import { Outlet, ScrollRestoration } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/NavBar/Header";
import logo from "/logo.png";

const Main = () => {
  const { loading } = useAuth();
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
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-550px)]">
        <Outlet />
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
