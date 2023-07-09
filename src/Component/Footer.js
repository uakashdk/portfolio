import React from 'react';

const Footer = () => {
  return (
    <footer className=' bg-slate-800 text-white'>
      <div className=" bg-slate-900 flex justify-start items-center py-8">
        <p className=' text-3xl'>&copy; 2023 Akash Dubey; </p>
        <ul className=' flex justify-center items-center gap-4 ml-10'>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
