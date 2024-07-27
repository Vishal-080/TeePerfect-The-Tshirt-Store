import React from 'react';
import {LOGO_URL} from "../Utils/constant";

const Header = () => {
  return (
    <div className='w-full	mx-auto sticky top-0 border-grey-300 border-solid border bg-white py-3 px-12 shadow-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div className='flex justify-between items-center'>
            <img src={LOGO_URL} alt="logo"/>
        </div>
        <div className='flex justify-between items-center'>
            <ul>
                <li>HOME</li>
                <li>CATEGORIES</li>
                <li>PAGES</li>
                <li>BRAND</li>
                <li>BLOG</li>
            </ul>
        </div>
        <div className='flex justify-between items-center'>
                <ul>
                    <li></li>
                </ul>
        </div>
    </div>
  )
}

export default Header;
