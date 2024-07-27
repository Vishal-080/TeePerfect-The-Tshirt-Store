import React from 'react';
import {LOGO_URL} from "../Utils/constant";

const Header = () => {
  return (
    <div className='w-11/12	mx-auto sticky border-grey-300 border-solid border'>
    <img src={LOGO_URL} alt="logo" />
    </div>
  )
}

export default Header;
