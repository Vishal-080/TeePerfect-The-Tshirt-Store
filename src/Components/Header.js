import React from "react";
import { LOGO_URL } from "../Utils/constant";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full	mx-auto sticky top-0 border-grey-300 border-solid border bg-white py-3 px-12 shadow-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between">
      <div className="flex justify-between items-center ">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex justify-between items-center">
        <ul className="flex justify-between items-center mx-2 px-4 border border-red-500">
          <li className="mx-2 font-medium text-center text-md">HOME</li>
          <li className="mx-2 font-medium text-center text-md">CATEGORIES</li>
          <li className="mx-2 font-medium text-center text-md">PAGES</li>
          <li className="mx-2 font-medium text-center text-md">BRAND</li>
          <li className="mx-2 font-medium text-center text-md">BLOG</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between items-center">
          <li>
            <AiOutlineSearch />
          </li>
          <li>
            <AiOutlineHeart />
          </li>
          <li>
            <BsPersonCircle />
          </li>
          <li>
            <AiOutlineShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
