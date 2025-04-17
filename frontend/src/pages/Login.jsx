import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import useLogin from "../hooks/useLogin"; // import the hook
import Button from "@mui/material/Button";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, loading } = useLogin(); // destructure from hook

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex relative justify-center h-[80%] w-full items-center p-2">
      <div className="bg-gray-200 flex flex-col md:flex-row justify-around items-center gap-4 sm:gap-10 px-2 py-10 md:px-6 rounded-lg shadow-md md:w-[80%]">
        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="RoomSync Logo"
            className="w-36 sm:w-80 rounded-full"
          />
        </div>

        {/* Login Form */}
        <div>
          <h2 className="text-3xl font-mono text-center mb-4">Login</h2>
          <form className="text-center" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 text-[#222] p-2 w-full border outline-none bg-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 text-[#222] p-2 w-full border outline-none bg-gray-300 rounded"
              required
            />
            <Button
              type="submit"
              variant="outlined"
              disabled={loading}
              loading={loading}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
