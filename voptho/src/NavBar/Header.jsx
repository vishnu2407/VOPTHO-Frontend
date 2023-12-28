import React, { useState } from 'react';
import { Link } from 'react-scroll';
import eye1 from '../Assets/eye1.jpeg';

const Navbar = () => { 
  const value = true;

  const handleLogoClick =() => {
    window.location.reload();
  }

  return (
    <div className='fixed w-full text-2xl h-[50px] flex justify-between center px-4 bg-blue-100 text-black z-300'>
      <div>
        <img src={eye1} alt='Logo' style={{ width: '80px', height: '80px'}} items-circle="true" value={value.toString()} onClick={handleLogoClick} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex md:space-x-4'>
        <li>
          <Link to='home' smooth={true} duration={250}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={250}>
            About
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={250}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;