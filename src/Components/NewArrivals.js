import React from "react";

const NewArrivals = () => {
  return (
    <div className="w-10/12 mx-auto my-10 p-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">New Arrivals</h1>
        <h2 className="font-bold text-md cursor-pointer text-[#3ba9e0] hover:border-b-2 hover:border-[#3ba9e0]">
          View More
        </h2>
      </div>
      <div className="p-4 my-8 bg-pink-400 flex justify-evenly items-center text-center">
        <div className="border">
          <img className="w-[250px] mx-4 bg-lime-400 h-[300px]" src="" alt="productImg" />
          <p className="my-4">Tshirt Name</p>
          <p className="my-4">From 250$</p>
        </div>
        <div className="border">
          <img className="w-[250px] mx-4 bg-lime-400 h-[300px]" src="" alt="productImg" />
          <p className="my-4">Tshirt Name</p>
          <p className="my-4">From 250$</p>
        </div>
        <div className="border">
          <img className="w-[250px] mx-4 bg-lime-400 h-[300px]" src="" alt="productImg" />
          <p className="my-4">Tshirt Name</p>
          <p className="my-4">From 250$</p>
        </div>
        <div className="border">
          <img className="w-[250px] mx-4 bg-lime-400 h-[300px]" src="" alt="productImg" />
          <p className="my-4">Tshirt Name</p>
          <p className="my-4">From 250$</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
