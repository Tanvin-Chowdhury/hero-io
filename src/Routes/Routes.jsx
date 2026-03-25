import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import AppError from "../components/AppError/AppError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
