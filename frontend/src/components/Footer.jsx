import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" neumorphism bg-[#e0e5ec] text-[#222] sticky w-full p-4 top-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <p className="text-sm font-bold">© 2024 RoomSync. All Rights Reserved.</p>
        </div>

        <div className="flex gap-4">
          <Link to="/" className=" neumorphism px-4 py-2 text-sm hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className=" neumorphism px-4 py-2 text-sm hover:text-blue-400">
            About
          </Link>
          <Link to="/privacy" className=" neumorphism px-4 py-2 text-sm hover:text-blue-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
