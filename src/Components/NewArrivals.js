import React, { useEffect, useState } from "react";

const NewArrivals = () => {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const JsonData = await data.json();
    setProductData(JsonData);
  };

  return (
    <div className="w-10/12 mx-auto my-10 p-2 text-center">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-md">New Arrivals</h1>
        <h2 className="font-semibold text-md cursor-pointer text-[#3ba9e0] hover:border-b-2 hover:border-[#3ba9e0]">
          View More
        </h2>
      </div>
      <div className="flex justify-evenly p-4 my-4">
        <div className="p-4 w-[300px] flex justify-between items-center flex-col">
          <img
            className="h-[300px] w-[285px] object-fill"
            src={ProductData[1]?.image}
            alt="productImg"
          />
          <p className="my-4 p-1">{ProductData[1]?.title}</p>
          <p className="my-2 p-1 font-medium">{ProductData[1]?.price} $</p>
        </div>
        <div className="p-4 w-[300px] flex justify-between items-center flex-col">
          <img
            className="h-[300px] w-[285px] object-fill"
            src={ProductData[1]?.image}
            alt="productImg"
          />
          <p className="my-4 p-1">{ProductData[1]?.title}</p>
          <p className="my-2 p-1 font-medium">{ProductData[1]?.price} $</p>
        </div>
        <div className="p-4 w-[300px] flex justify-between items-center flex-col">
          <img
            className="h-[300px] w-[285px] object-fill"
            src={ProductData[2]?.image}
            alt="productImg"
          />
          <p className="my-4 p-1">{ProductData[2]?.title}</p>
          <p className="my-2 p-1 font-medium">{ProductData[2]?.price} $</p>
        </div>
        <div className="p-4 w-[300px] flex justify-between items-center flex-col">
          <img
            className="h-[300px] w-[285px] object-fill"
            src={ProductData[3]?.image}
            alt="productImg"
          />
          <p className="my-4 p-1">{ProductData[3]?.title}</p>
          <p className="my-2 p-1 font-medium">{ProductData[3]?.price} $</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
