import React from "react";

const NewArrivals = () => {
  return (
    <div className="w-10/12 mx-auto my-10 p-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">New Arrivals</h1>
        <h2 className="font-bold text-md cursor-pointer text-[#3ba9e0] hover:border-b-2 hover:border-[#3ba9e0]">View More</h2>
      </div>
      <div className="p-4 bg-pink-400">
        <div>
          <img src="" alt="productImg" />
        </div>
        <div>
          <img src="" alt="productImg" />
        </div>
        <div>
          <img src="" alt="productImg" />
        </div>
        <div>
          <img src="" alt="productImg" />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
