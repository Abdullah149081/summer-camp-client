import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login/Login";
import Register from "../Page/Login/Register/Register";
import ClassPage from "../Page/Shared/ClassPage/ClassPage";
import ManageClass from "../Page/Shared/Dashboard/Admin/ManageClass";
import ManageUsers from "../Page/Shared/Dashboard/Admin/ManageUsers";
import AddClass from "../Page/Shared/Dashboard/Instructors/AddClass";
import InstructorPage from "../Page/Shared/Dashboard/Instructors/InstructorPage";
import TeachersClass from "../Page/Shared/Dashboard/Instructors/TeachersClass";
import EnrolledClass from "../Page/Shared/Dashboard/Student/EnrolledClass";
import MySelectedClasses from "../Page/Shared/Dashboard/Student/MySelectedClasses";
import PaymentHistory from "../Page/Shared/Dashboard/Student/PaymentHistory";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
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
      {
        path: "classes",
        element: <ClassPage />,
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
      {
        path: "enrolledClass",
        element: <EnrolledClass />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
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
      {
        path: "manageClass",
        element: (
          <AdminRoute>
            <ManageClass />
          </AdminRoute>
        ),
      },
      // instructors
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "teacherClass",
        element: (
          <InstructorRoute>
            <TeachersClass />
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
