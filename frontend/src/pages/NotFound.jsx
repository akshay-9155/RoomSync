import React from "react";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e0e5ec] text-gray-800 px-4">
      <div className="neumorphism p-10 rounded-3xl shadow-lg max-w-md w-full text-center">
        <div className="flex justify-center items-center mb-6">
          <div
            className="p-6 rounded-full bg-[#e0e5ec]"
            style={{
              boxShadow:
                "inset 6px 6px 12px #c5c5c5, inset -6px -6px 12px #ffffff",
            }}
          >
            <MdErrorOutline size={60} className="text-red-500" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className=" inline-block mt-6 px-6 py-3 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-300"
          style={{
            boxShadow: "10px 10px 20px #c5c5c5, -10px -10px 20px #ffffff",
          }}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
