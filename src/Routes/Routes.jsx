import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login/Login";
import Register from "../Page/Login/Register/Register";
import MySelectedClasses from "../Page/Shared/Dashboard/Student/MySelectedClasses";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";

import ManageUsers from "../Page/Shared/Dashboard/Admin/ManageUsers";
import InstructorPage from "../Page/Shared/Dashboard/Instructors/InstructorPage";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";

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
      {
        path: "instructors",
        element: <InstructorPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "studentClasses",
        element: <MySelectedClasses />,
      },
      // Admin
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      // instructors
    ],
  },
]);

export default router;
