import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#222] sticky w-full text-zinc-200 p-4 bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <p className="text-sm">© 2024 RoomSync. All Rights Reserved.</p>
        </div>

        <div className="flex gap-4">
          <Link to="/" className="text-sm hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="text-sm hover:text-blue-400">
            About
          </Link>
          <Link to="/privacy" className="text-sm hover:text-blue-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
