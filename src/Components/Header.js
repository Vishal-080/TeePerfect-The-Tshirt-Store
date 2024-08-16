import React from "react";
import { LOGO_URL } from "../Utils/constant";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full	mx-auto sticky top-0 border-grey-300 border-solid border bg-white py-1 px-10 shadow-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between z-50">
      <div className="flex justify-between items-center ">
        <img className="w-32" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex justify-between items-center w-4/12">
        <ul className="flex justify-between items-center w-full">
          <li className="mx-2 font-medium text-center text-xs  cursor-pointer">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="mx-2 font-medium text-center text-xs cursor-pointer inline-block hover:bg-red-400 hover:block">
            <Link to={"/categories"}>CATEGORIES</Link>
            <div class="hidden hover:flex flex-row justify-evenly items-center absolute bg-[#f9f9f9] min-w-54 py-12 px-14 hover:bg-blue-500 my-4 z-1">
              <a className="border border-red-300 m-4 p-4" href="#">
                Link 1
              </a>
              <a className="border border-red-300 m-4 p-4" href="#">
                Link 2
              </a>
              <a className="border border-red-300 m-4 p-4" href="#">
                Link 3
              </a>
            </div>
          </li>
          <li className="mx-2 font-medium text-center text-xs cursor-pointer">
            <Link to={"/pages"}>PAGES</Link>
          </li>
          <li className="mx-2 font-medium text-center text-xs cursor-pointer">
            <Link to={"/brand"}>BRAND</Link>
          </li>
          <li className="mx-2 font-medium text-center text-xs cursor-pointer">
            <Link to={"/blog"}>BLOG</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center w-1/4">
        <ul className="flex justify-between items-center mx-2 px-4 w-full">
          <li className="mx-2 cursor-pointer">
            <AiOutlineSearch />
          </li>
          <li className="mx-2 cursor-pointer">
            <AiOutlineHeart />
          </li>
          <li className="mx-2 cursor-pointer">
            <BsPersonCircle />
          </li>
          <li className="mx-2 cursor-pointer">
            <AiOutlineShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
