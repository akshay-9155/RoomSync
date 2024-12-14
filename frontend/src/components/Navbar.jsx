import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import Button from "./Button";

const Navbar = () => {
  const navLinkStyles =
    " ";
    const {user} = useSelector(state => state.auth);
    const {dispatch} = useDispatch();
    const handleLogout = () => {
      dispatch(logout())
    }

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
            <Button content="Rooms" />
          </Link>
          <Link
            to="/rooms/1"
            className={`${navLinkStyles} ${user ? "block" : "hidden"}`}
          >
            <Button content="Room Details" />
          </Link>
          <Link
            to="/profile/1"
            className={`${navLinkStyles} ${user ? "block" : "hidden"}`}
          >
            <Button content="Profile" />
          </Link>
          <Link
            to="/login"
            className={`${navLinkStyles} ${user ? "block" : "hidden"}`}
            onClick={handleLogout}
          >
            <Button content="Logout" />
          </Link>
          <Link
            to="/login"
            className={`${navLinkStyles} ${user ? "hidden" : "block"}`}
          >
            <Button content="Login" />
          </Link>
          <Link
            to="/signup"
            className={`${navLinkStyles} ${user ? "hidden" : "block"}`}
          >
            <Button content="Signup" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
