import React, { useEffect, useState } from "react";

const NewArrivals = () => {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProductData(data));
    console.log(ProductData, "Hello");
  };

  return (
    <div className="w-10/12 mx-auto my-10 p-2">
      <div className="flex justify-between items-center bg-blue-300">
        <h1 className="font-bold text-lg">New Arrivals</h1>
        <h2 className="font-bold text-md cursor-pointer text-[#3ba9e0] hover:border-b-2 hover:border-[#3ba9e0]">
          View More
        </h2>
      </div>
      <div className=" bg-pink-300 flex justify-evenly p-4 my-4">
        <div className="border bg-red-500 p-4 w-[300px]">
          <img
            className="bg-lime-400 h-[300px] w-[275px] object-fill"
            src={ProductData[1]?.image}
            alt="productImg"
          />
          <p className="my-4 p-2 bg-cyan-400">{ProductData[1]?.title}</p>
          <p className="my-4 p-2 bg-cyan-400">{ProductData[1]?.price} $</p>
        </div>
        <div className="border bg-red-500 p-4 w-[300px]">
          <img
            className=" bg-lime-400 h-[300px] w-[275px] object-fill"
            src={ProductData[1]?.image}
            alt="productImg"
          />
          <p className="my-4 p-2 bg-cyan-400">{ProductData[1]?.title}</p>
          <p className="my-4 p-2 bg-cyan-400">{ProductData[1]?.price} $</p>
        </div>
        <div className="border bg-red-500 p-4 w-[300px]">
          <img
            className=" bg-lime-400 h-[300px] w-[275px] object-fill"
            src={ProductData[2]?.image}
            alt="productImg"
          />
          <p className="my-4 p-2 bg-cyan-400">{ProductData[2]?.title}</p>
          <p className="my-4 p-2 bg-cyan-400">{ProductData[2]?.price} $</p>
        </div>
        <div className="border bg-red-500 p-4 w-[300px]">
          <img
            className=" bg-lime-400 h-[300px] w-[275px] object-fill"
            src={ProductData[3]?.image}
            alt="productImg"
          />
          <p className="my-4 p-2 bg-cyan-400">{ProductData[3]?.title}</p>
          <p className="my-4 p-2 bg-cyan-400">{ProductData[3]?.price} $</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
