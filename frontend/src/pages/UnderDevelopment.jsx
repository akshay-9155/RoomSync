import React from "react";
import Button from "../components/Button";
import { IoIosConstruct } from "react-icons/io";


const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec]">
      <div className="neumorphism p-10 max-w-md w-full text-center">
        <div className="flex flex-col items-center space-y-6">
          <div
            className="p-6 rounded-full bg-[#e0e5ec]"
            style={{
              boxShadow:
                "inset 6px 6px 12px #c5c5c5, inset -6px -6px 12px #ffffff",
            }}
          >
            <IoIosConstruct size={30} />
          </div>
          <h1 className="text-2xl font-bold text-gray-700">
            Under Development
          </h1>
          <p className="text-gray-600">
            This feature is currently under construction. We are working hard to
            bring it to life!
          </p>
          <Button
            content="Go Back Home"
            onClick={() => (window.location.href = "/")}
          />
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
