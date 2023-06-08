import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";

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
    ],
  },
]);

export default router;
