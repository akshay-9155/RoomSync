import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login")
    // Perform signup logic (send to backend, validation, etc.)
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
      <div className="bg-[#e8e8e8] w-[90%] max-w-4xl p-6 rounded-2xl shadow-xl neumorphism flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Create an Account
        </h2>

        {/* Sign Up Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-6">
          {/* Name Field */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="text"
              placeholder="Full Name"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
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

          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 bg-[#e0e5ec] text-gray-700 rounded-lg neumorphism text-center text-xl hover:shadow-lg transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Sign Up Alternative */}
        <div className="text-center mt-6">
          <p className="text-gray-700">Or sign up with</p>
          <div className="flex justify-center gap-4 mt-4">
            {/* Google Sign Up */}
            <button className="neumorphism p-4 rounded-full bg-[#e0e5ec] hover:shadow-lg transition-all">
              <img
                src="https://imgs.search.brave.com/WFUCWSTA1WQZxQ6Bj0PpSiIS0qx9cb9e-ysxkOY4rTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc"
                alt="Google"
                className="w-6 h-6"
              />
            </button>

            {/* Facebook Sign Up */}
            <button className="neumorphism p-4 rounded-full bg-[#e0e5ec] hover:shadow-lg transition-all">
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
