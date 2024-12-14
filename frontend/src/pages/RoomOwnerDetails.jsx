import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomOwnerDetails = () => {
  const [ownerName, setOwnerName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("");
  const [facilities, setFacilities] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data (send to backend, etc.)
    console.log({ ownerName, roomType, location, rent, facilities, contact });
    navigate("/"); // Redirect after submitting
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
      <div className="bg-[#e8e8e8] w-[90%] max-w-4xl p-6 rounded-2xl shadow-xl neumorphism flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Room Owner Details
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Owner Name Field */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="text"
              placeholder="Owner's Name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Room Type Field */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="text"
              placeholder="Room Type (e.g., 1BHK, PG)"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Location Field */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Rent Field */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="number"
              placeholder="Rent (per month)"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Facilities Provided */}
          <div className="neumorphism p-4 rounded-xl">
            <textarea
              placeholder="Facilities Provided (e.g., WiFi, Parking)"
              value={facilities}
              onChange={(e) => setFacilities(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Contact Number */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="tel"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 bg-[#e0e5ec] text-gray-700 rounded-lg neumorphism text-center text-xl hover:shadow-lg transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomOwnerDetails;
