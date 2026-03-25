import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../components/Home/Home";
import AllApps from "../components/AllApps/AllApps";
import InstalledApps from "../components/InstalledApps/InstalledApps";
import AppDetails from "../components/AppDetails/AppDetails";
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
        path: "/apps",
        element: <AllApps></AllApps>,
      },
      {
        path: "/installedApps",
        element: <InstalledApps></InstalledApps>,
      },
      {
        path: "/appDetails/:id",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
