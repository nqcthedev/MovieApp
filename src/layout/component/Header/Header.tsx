import { FiSearch } from "react-icons/fi";
import { GiOldMicrophone } from "react-icons/gi";
import HeaderRight from "./HeaderRight";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-auto flex flex-col px-6 mt-5">
      <form className="w-4/5">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <FiSearch className="text-gray-600 w-6 h-6" />
          </div>
          <input
            type="text"
            className="placeholder-gray-500 focus:placeholder-gray-400 block p-2 sm:p-2 md:p-2 lg:p-3   pl-10 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-10 w-full  text-white bg-blue-odd border border-gray-700 rounded-3xl focus:outline-none"
            placeholder="Search Movies...."
          />
          <span className="flex absolute inset-y-0 right-12 items-center pr-3 border-r border-gray-700 h-[35px] mt-2" />
          <button
            type="button"
            className="flex absolute inset-y-0 right-0 items-center pr-3"
          >
            <GiOldMicrophone className="text-gray-600 w-6 h-6" />
          </button>
        </div>
      </form>
      <div className="w-2/5">
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
