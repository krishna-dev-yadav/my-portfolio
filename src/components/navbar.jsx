import React from 'react';
import { Link } from 'react-router-dom';
import { PiAppStoreLogoThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10  text-white px-10 py-4 shadow-2xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <PiAppStoreLogoThin className="text-4xl text-black mx-2 p-1" />
          <h1 className="text-2xl text-black font-semibold">Portfolio</h1>
        </div>
        <div className="flex gap-6 text-lg">
          <Link to="/" className="hover:underline text-black">Home</Link>
          <Link to="/about" className="hover:underline text-black ">About</Link>
          <Link to="/project" className="hover:underline text-black ">Project</Link>
          <Link to="/contect" className="hover:underline text-black ">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
