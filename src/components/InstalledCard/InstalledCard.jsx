import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

const InstalledCard = ({ app, onUninstall }) => {
  const formatDownloads = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num;
    }
  };

  return (
    <div className="border-2 border-purple-50 p-4 rounded-md shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
      <div className="flex flex-wrap  gap-5 items-center justify-center">
        <img
          src={app.image}
          alt={app.title}
          className="w-16 h-16 object-contain rounded-md bg-gray-100 shadow-sm shadow-gray-400 p-2"
        />
        <h3 className=" font-semibold text-lg">{app.title}</h3>
        <div className="">
          <div className="flex gap-3">
            <p className=" text-green-600 flex items-center gap-2 rounded-md">
              <BiDownload />
              {formatDownloads(app.downloads)}
            </p>
            <p className=" text-amber-600 flex items-center gap-2 rounded-md">
              <FaStar />
              {app.ratingAvg}
            </p>
            <p>{app.size} MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => onUninstall(app.id)}
        className="hover:border-2 hover:border-green-500 hover:text-green-500
      hover:bg-white bg-green-500 text-white rounded-lg px-3 py-2"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledCard;
