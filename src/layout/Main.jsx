/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/NavBar/Header";

const Main = () => {
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
