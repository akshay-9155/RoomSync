import React from "react";
import { Link } from "react-router-dom";
import { buttonNeumorphicSx } from "../utils/muiHelper";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className=" neumorphism bg-[#e0e5ec] text-[#222] sticky w-full p-4 top-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <p className="text-sm font-bold">
            © 2024 RoomSync. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <Link to="/">
            <Button sx={buttonNeumorphicSx} variant="contained">
              Home
            </Button>
          </Link>
          <Link
            to="/about"
          >
            <Button sx={buttonNeumorphicSx} variant="contained">
              About
            </Button>
          </Link>
          <Link
            to="/privacy"
          >
            <Button sx={buttonNeumorphicSx} variant="contained">
              Privacy Policy
            </Button>
            
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
