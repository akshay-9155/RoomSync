import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl p-8 shadow-2xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to RoomSync
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Find the perfect roommate for your new home
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-neumorphism flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mb-4 shadow-xl"></div>
            <h3 className="text-xl font-semibold text-gray-800">
              Room Seekers
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Find rooms to rent, with detailed listings and communication
              features.
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full shadow-neumorphism hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-neumorphism flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4 shadow-xl"></div>
            <h3 className="text-xl font-semibold text-gray-800">Room Owners</h3>
            <p className="text-center text-gray-600 mt-2">
              List your available rooms and find compatible roommates quickly.
            </p>
            <button
              onClick={() => navigate("/ListRoom")}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full shadow-neumorphism hover:shadow-md"
            >
              Start Listing
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-neumorphism flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4 shadow-xl"></div>
            <h3 className="text-xl font-semibold text-gray-800">
              Chat & Connect
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Use the integrated chat feature to easily communicate with
              potential roommates or owners.
            </p>
            <button
              onClick={() => navigate("/chat")}
              className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-full shadow-neumorphism hover:shadow-md"
            >
              Start Chatting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
