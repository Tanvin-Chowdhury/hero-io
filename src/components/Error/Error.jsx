import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="py-20 px-2 flex flex-col items-center justify-center gap-2">
      <img src="src\assets\error-404.png" alt="" className="w-100" />
      <p className="text-5xl text-[#632ee3] text-center font-bold">
        404 Page not found!
      </p>
      <p className="text-center text-[#627382] mt-3">
        Sorry, the page you are looking for might be removed, renamed or
        temporarily unavailable!
      </p>
      <div className="flex justify-center gap-5">
        <Link to="/">
          <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white mt-10 px-10 py-6">
            Back to home
          </button>
        </Link>
        <Link to="/apps">
          <button className="btn bg-gradient-to-r from-[#111949] to-[#29396e] text-white mt-10 px-10 py-6">
            Show All Apps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
