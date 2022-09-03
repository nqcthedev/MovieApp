import { Link } from "react-router-dom";
import LogoImage from "@/assets/cinema.png";
import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="w-80 border-r-[1.5px] border-gray-800"
      aria-label="Sidebar"
    >
      <div className="overflow-x-hidden py-4 pl-12 pr-11">
        <Link to="/">
          <a className="flex items-center">
            <img
              src={LogoImage}
              alt="MovieLogo"
              className="mr-3 object-contain h-8 sm:h-12"
            />
            <span className="self-center text-2xl whitespace-nowrap font-medium">
              FreeFilm
            </span>
          </a>
        </Link>
        <div>
          
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
