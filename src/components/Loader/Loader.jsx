import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="loading-text text-4xl flex  gap-4">
        <span className="">L </span>
        <img src="src\assets\logo.png" alt="" className="animate-spin w-10" />
        <span className="">L o a d i n g</span>
        <span className="animate-pulse">...</span>
      </div>
    </div>
  );
};

export default Loader;
