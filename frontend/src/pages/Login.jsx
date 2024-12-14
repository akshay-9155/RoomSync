import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
import logo from "../assets/logo.webp"; // Import your logo here
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication and dispatch the setUser action
    const userData = { email, name: "John Doe" }; // Mocked user data
    dispatch(setUser(userData));
    navigate('/')
  };

  return (
    <div className="flex relative justify-center h-[80%] w-full items-center p-2">
      <div className="bg-gray-200 flex flex-col md:flex-row justify-around items-center gap-10 px-2 py-10 md:px-6 rounded-lg shadow-md md:w-[80%]">
        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="RoomSync Logo"
            className="w-80 rounded-full" // Adjust logo size based on screen size
          />
        </div>

        {/* Login Form */}
        <div className=" ">
          <h2 className="text-3xl font-mono text-center mb-4">Login</h2>
          <form className=" text-center" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 text-[#222] p-2 w-full border outline-none bg-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 text-[#222] p-2 w-full border outline-none bg-gray-300 rounded"
            />
            <Button content="Login"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
