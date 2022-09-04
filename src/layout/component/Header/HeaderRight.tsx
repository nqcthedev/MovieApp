import {AiFillMessage} from "react-icons/ai"
import AvatarImage from "@/assets/avatar.jpg";
import {IoIosArrowDown} from "react-icons/io"
import {IoNotificationsSharp} from "react-icons/io5"
import React from "react";

const HeaderRight = () => {
  return (
    <div className="flex items-center justify-center gap-5">
     
      <div className="flex items-center w-12 h-12 p-2 border-[1px] border-gray-700 rounded-full">
        <AiFillMessage className="w-6 h-6 pl-[5px]"/>
      </div>
      <div className="flex items-center w-12 h-12 p-2 border-[1px] border-gray-700 rounded-full">
        <IoNotificationsSharp className="w-6 h-6 pl-[5px]"/>
      </div>
     <div className="flex items-center cursor-pointer">
     <img src={AvatarImage} alt="Avatar Image" className="w-12 h-12 rounded-full object-cover" />
      <div className="ml-3">
        <h2 className="font-semibold text-gray-200">Cường Idol</h2>
        <span className="text-sm text-gray-500">Nguyenquoccuong1998x@gmail.com</span>
      </div>
      <IoIosArrowDown className="ml-3 mb-2 text-xl"/>
     </div>
    </div>
  );
};

export default HeaderRight;
