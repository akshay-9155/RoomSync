import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 py-10">
      {/* Profile Card */}
      <div className="bg-[#e8e8e8] w-96 p-6 rounded-2xl shadow-xl neumorphism flex flex-col items-center">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#d1d9e6] to-[#ffffff] shadow-inner neumorphism flex justify-center items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* User Information */}
        <h2 className="text-2xl font-semibold mt-4">John Doe</h2>
        <p className="text-gray-600 mt-1">john.doe@example.com</p>

        {/* Editable Info */}
        <div className="mt-6 w-full space-y-4">
          {/* Username */}
          <div className="neumorphism p-3 rounded-md flex items-center justify-between">
            <span className="text-gray-700">Username</span>
            <input
              type="text"
              defaultValue="John Doe"
              className="bg-transparent outline-none text-gray-700 text-right"
            />
          </div>

          {/* Email */}
          <div className="neumorphism p-3 rounded-md flex items-center justify-between">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="bg-transparent outline-none text-gray-700 text-right"
            />
          </div>

          {/* Phone */}
          <div className="neumorphism p-3 rounded-md flex items-center justify-between">
            <span className="text-gray-700">Phone</span>
            <input
              type="tel"
              defaultValue="+123 456 7890"
              className="bg-transparent outline-none text-gray-700 text-right"
            />
          </div>
        </div>

        {/* Save Button */}
        <button className="mt-6 px-6 py-2 rounded-md neumorphism bg-[#e0e5ec] text-gray-700 hover:shadow-lg transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
