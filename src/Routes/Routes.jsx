import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login/Login";
import Register from "../Page/Login/Register/Register";
import MySelectedClasses from "../Page/Shared/Dashboard/Student/MySelectedClasses";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";

import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "studentClasses",
        element: <MySelectedClasses />,
      },
    ],
  },
]);

export default router;
