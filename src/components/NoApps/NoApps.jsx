import React from "react";

const NoApps = () => {
  return (
    <div className="mt-10">
      <p className="text-center text-purple-900 font-semibold text-4xl">
        No App Found
      </p>
      <div className="w-full flex justify-center mt-3">
        <img
          className="w-[300px] h-[300px]"
          src="src\assets\App-Error.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NoApps;
