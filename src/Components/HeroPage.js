import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full m-auto bg-red-400 '>
      <div className='z-10 left-64 top-2/4 absolute flex flex-col justify-center items-center'>
        <h1 className='m-2 font-bold text-5xl text-[#3ba9e0] font-serif text-center'>SHIRTS AS UNIQUE AS YOU ARE</h1>
        <h4 className='m-2 text-center font-normal text-xl'>Welcome To The Largest Online T-shirt Platform In The World</h4>
        <button className='m-2 text-center border py-2 px-4 rounded-md bg-white text-[#3ba9e0] font-bold w-32 m-auto'>Shop Now</button>
      </div>
        <img className='max-w-full object-cover h-screen' src="https://teeperfect.myshopify.com/cdn/shop/files/p4.jpg" alt="HeroImg" />
    </div>
  )
}

export default HeroPage;