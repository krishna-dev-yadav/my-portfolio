import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiAppStoreLogoThin } from "react-icons/pi";
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white px-4 sm:px-6 py-4 ">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <PiAppStoreLogoThin className="text-4xl text-white" />
          <h1 className="text-xl sm:text-2xl text-white font-semibold">MyPortfolio</h1>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-50 text-3xl">
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        <div className="hidden md:flex flex-wrap justify-center gap-4 text-sm sm:text-lg">
          <Link to="/" className="hover:underline font-bold text-white">Home</Link>
          <Link to="/about" className="hover:underline text-white">About me</Link>
          <Link to="/project" className="hover:underline text-white">Project</Link>
          <Link to="/contect" className="hover:underline text-white">Contact</Link>
        </div>

        <div className="hidden md:block">
          <button className='px-9 py-2 text-sm sm:text-base shrink-0 bg-gradient-to-r from-[#9E9EB9] to-[#474753]/10 font-bold rounded-3xl'>Resume</button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 px-4 bg-black/80 py-6 rounded-xl text-center flex flex-col gap-6 text-lg font-medium backdrop-blur">
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">About me</Link>
          <Link onClick={() => setMenuOpen(false)} to="/project">Project</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contect">Contact</Link>
          <button className='px-6 py-2 bg-gradient-to-r from-[#9E9EB9] to-[#474753] rounded-3xl'>Resume</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
