import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useSelector } from "react-redux";
// import Button from "./Button";
import Button from "@mui/material/Button";
import useLogout from "../hooks/useLogout";
import { buttonNeumorphicSx } from "../utils/muiHelper";

const Navbar = () => {
  const navLinkStyles =
    " ";
    const {user} = useSelector(state => state.auth);
    const { logout, loading } = useLogout();
    const handleLogout = async () => {
      await logout();
    };

  return (
    <header className=" sticky top-0 z-10 w-full bg-gray-200 text-zinc-200 p-4">
      <div className="w-full flex justify-between items-center">
        <h2 className="md:text-2xl flex items-center gap-4 font-bold">
          <Link to="/">
            <img
              className="h-10 rounded-full hover:rounded-xl"
              src={logo}
              alt="logo"
            />
          </Link>
          <Link to="/" className=" text-gray-800">
            RoomSync
          </Link>
        </h2>
        <nav className="flex space-x-4 md:space-x-6">
          <Link
            to="/rooms"
            className={`${navLinkStyles} ${user ? "block" : "hidden"}`}
          >
            <Button sx={buttonNeumorphicSx} variant="contained">Rooms</Button>
          </Link>
          <Link
            to="/rooms/1"
            className={`${navLinkStyles} ${user ? "block" : "hidden"}`}
          >
            <Button sx={buttonNeumorphicSx} variant="contained">Room Details</Button>
          </Link>
          <Link
            to="/profile/1"
            className={`${navLinkStyles} ${user ? "block" : "hidden"}`}
          >
            <Button sx={buttonNeumorphicSx} variant="contained"
            >
              Profile
            </Button>
          </Link>
          <Link
            className={`${navLinkStyles} ${user ? "block" : "hidden"}`}
            onClick={handleLogout}
          >
            <Button sx={buttonNeumorphicSx} variant="contained" loading={loading} disabled={loading}>
              Log Out
            </Button>
          </Link>
          <Link
            to="/login"
            className={`${navLinkStyles} ${user ? "hidden" : "block"}`}
          >
            <Button sx={buttonNeumorphicSx} variant="contained">Log In</Button>
          </Link>
          <Link
            to="/signup"
            className={`${navLinkStyles} ${user ? "hidden" : "block"}`}
          >
            <Button sx={buttonNeumorphicSx} variant="contained">Sign Up</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
