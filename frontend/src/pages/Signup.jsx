import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useSignup from "../hooks/useSignup";
import { Button } from "@mui/material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("seeker");
  const navigate = useNavigate();

  const { signup, loading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { success } = await signup({
      name,
      email,
      password,
      role,
      mobileNumber,
    });

    if (success) {
      navigate(role == "owner" ? "/" : "/roomseekerdetails"); // or go to /dashboard or /profile
    }
  };

  const handleOAuthClick = () => {
    navigate("/upderDevelopment");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
      <div className="bg-[#e8e8e8] w-[90%] max-w-4xl p-6 rounded-2xl shadow-xl neumorphism flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Create an Account
        </h2>
  
        {/* Sign Up Form */}
        <form onSubmit={handleSignup}>
          <div className="flex flex-col gap-6">
            {/* Name Field */}
            <div className="neumorphism p-4 rounded-xl">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="neumorphism p-4 rounded-xl">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
              />
            </div>

            <div className="neumorphism p-4 rounded-xl">
              <PhoneInput
                country={"in"}
                value={mobileNumber}
                onChange={(phone) => setMobileNumber(phone)}
                inputStyle={{
                  width: "100%",
                  padding: "24px 40px",
                  background: "#e0e5ec",
                  borderRadius: "0.375rem",
                  boxShadow:
                    "8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  color: "#222",
                }}
                containerStyle={{
                  width: "100%",
                  background: "#e0e5ec",
                  borderRadius: "0.375rem",
                  boxShadow:
                    "8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)",
                }}
                buttonStyle={{
                  background: "#e0e5ec",
                  border: "none",
                  borderRadius: "0.375rem",
                }}
              />
            </div>

            {/* Password Field */}
            <div className="neumorphism p-4 rounded-xl">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
              />
            </div>

            {/* Role Selection */}
            <div className="flex items-center gap-3 neumorphism p-4 rounded-xl">
              <input
                type="checkbox"
                id="isRoomOwner"
                checked={role === "owner"}
                onChange={(e) => setRole(e.target.checked ? "owner" : "seeker")}
                className="w-5 h-5 accent-blue-500"
              />
              <label htmlFor="isRoomOwner" className="text-[#222] text-lg">
                Are you a room owner?
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex items-center justify-center mt-10">
            <Button type="submit" variant="outlined" disabled={loading} loading={loading}>
              Sign Up
            </Button>
          </div>
        </form>

        {/* Sign Up Alternative */}
        <div className="text-center mt-6">
          <p className="text-gray-700">Or sign up with</p>
          <div className="flex justify-center gap-4 mt-4">
            {/* Google Sign Up */}
            <button
              onClick={handleOAuthClick}
              className="neumorphism p-4 rounded-full bg-[#e0e5ec] hover:shadow-lg transition-all"
            >
              <img
                src="https://imgs.search.brave.com/WFUCWSTA1WQZxQ6Bj0PpSiIS0qx9cb9e-ysxkOY4rTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc"
                alt="Google"
                className="w-6 h-6"
              />
            </button>

            {/* Facebook Sign Up */}
            <button
              onClick={handleOAuthClick}
              className="neumorphism p-4 rounded-full bg-[#e0e5ec] hover:shadow-lg transition-all"
            >
              <img
                src="https://imgs.search.brave.com/-dxhHDpGw0QZ0tHIEuuebNweglCg0x-XnzSF1i1opK4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzEyLzkzLzQz/LzM2MF9GXzkxMjkz/NDM4Ml9MTnptNktO/SlhlbGJMVmVqYktT/bzNXM09SZFdzYlYy/Vi5qcGc"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Already have an account? */}
        <div className="text-center mt-6">
          <p className="text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
