const HeroPage = () => {
  return (
    <div className="w-full m-auto text-center bg-red-400">
      <div className="z-10 left-56 top-2/4 absolute flex flex-col justify-center items-center text-center">
        <h1 className="m-2 font-bold text-4xl text-[#3ba9e0] font-serif text-center">
          SHIRTS AS UNIQUE AS YOU ARE
        </h1>
        <h4 className="m-2 text-center font-normal text-xl">
          Welcome To The Largest Online T-shirt Platform In The World
        </h4>
        <button className="m-2 text-center border py-2 px-4 rounded-md bg-white text-[#3ba9e0] font-semibold text-lg hover:text-white hover:bg-[#3ba9e0]">
          Shop Now
        </button>
      </div>
      <img
        className="max-w-full object-cover h-screen"
        src="https://teeperfect.myshopify.com/cdn/shop/files/p4.jpg"
        alt="HeroImg"
      />
    </div>
  );
};

export default HeroPage;
