import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-BANNER_BG_IMG_URL w-11/12 m-auto h-screen bg-cover bg-no-repeat bg-top text-center text-white flex justify-center items-center flex-col">
      <h2 className="font-bold text-3xl mb-16">Time To Travel</h2>
      <p className="font-normal text-wrap text-sm mb-16 w-1/3">
        Let our gorgeous T-shirt help you to have a meaningful trip !
      </p>
      <button className="bg-white text-[#3ba9e0] font-semibold text-sm hover:text-white hover:bg-[#3ba9e0] py-2  px-8 rounded-md border-none">
        <Link to="categories">Browse Collection</Link>
      </button>
    </div>
  );
};

export default Banner;
