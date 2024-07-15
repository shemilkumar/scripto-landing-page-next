import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="px-5 py-2 font-medium tracking-wide text-purple-500 capitalize transition-all border border-purple-500 rounded-l-full rounded-r-full outline-none sm:px-8 bg-white-500 hover:bg-purple-500 hover:text-white-500 hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
