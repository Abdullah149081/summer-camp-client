import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home/Home";
import Register from "../Page/Login/Register/Register";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";
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
    ],
  },
]);

export default router;
