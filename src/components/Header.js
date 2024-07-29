import React from 'react';

// import images
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className='py-8' >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} className='w-1/3 h-auto'  alt='' />
          </a>
          {/* button */}
          <button className='btn btn-sm'>work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
