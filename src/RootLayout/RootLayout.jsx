import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="font-inter flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
