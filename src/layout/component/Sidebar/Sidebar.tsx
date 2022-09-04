import { Link } from "react-router-dom";
import LogoImage from "@/assets/cinema.png";
import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="flex-shink-0 sm:sticky left-auto right-full sm:!right-0 sm:!left-0 fixed top-0 flex flex-col items-stretch px-6 py-10 pl-5 xl:pl-7 w-[90vw] max-w[288px] sm:max-w-none sm:w-16 xl:w-72 border-r border-gray-800 h-screen overflow-y-auto z-10 bg-dark sm:bg-transparent sm:!translate-x-0 transition-all duration-500"
      aria-label="Sidebar"
    >
      <div className="overflow-x-hidden">
        <Link to="/">
          <a className="flex items-center">
            <img
              src={LogoImage}
              alt="MovieLogo"
              className="mr-3 object-contain h-8 sm:h-12 outline-none"
            />
            <span className="self-center text-2xl whitespace-nowrap font-medium">
              FreeFilm
            </span>
          </a>
        </Link>
        <div className="mt-8 bg-gradient-to-r from-sky-500 to-blue-800 w-full h-[180px] rounded-[45px]">
          
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
