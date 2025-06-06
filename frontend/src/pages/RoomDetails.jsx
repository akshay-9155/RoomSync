import React from "react";

const RoomDetails = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
      <div className="bg-[#e8e8e8] w-[90%] max-w-4xl p-6 rounded-2xl shadow-xl neumorphism flex flex-col gap-8">
        {/* Room Image */}
        <div className="neumorphism-inner p-4 rounded-xl">
          <img
            src="https://imgs.search.brave.com/sKWLQ2uK44msz2z2bp6y7dUBPWthHQoAxKgWEbeMoDE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzMwLzI2Lzg3/LzM2MF9GXzEwMzAy/Njg3MzRfRkJ5YkR5/czlsc0tlMDNIZ0Fi/SkZmUFl0ZkJzNVJT/T1ouanBn"
            alt="Room"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>

        {/* Room Information */}
        <div className="space-y-6">
          {/* Title and Price */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Cozy Apartment in Pune</h2>
            <p className="text-xl font-bold bg-[#e0e5ec] py-2 px-4 rounded-lg neumorphism">
              Rs8000/month
            </p>
          </div>

          {/* Room Description */}
          <p className="text-gray-600 text-lg">
            A beautiful apartment located in the heart of the city. Comes fully
            furnished with a spacious living area, modern kitchen, and access to
            all amenities. Perfect for students or professionals.
          </p>

          {/* Room Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="neumorphism p-4 rounded-lg text-center">
              <p className="text-gray-700 font-semibold">Bedrooms</p>
              <p className="text-xl font-bold">2</p>
            </div>
            <div className="neumorphism p-4 rounded-lg text-center">
              <p className="text-gray-700 font-semibold">Bathrooms</p>
              <p className="text-xl font-bold">1</p>
            </div>
            <div className="neumorphism p-4 rounded-lg text-center">
              <p className="text-gray-700 font-semibold">Available From</p>
              <p className="text-xl font-bold">Dec 1, 2024</p>
            </div>
            <div className="neumorphism p-4 rounded-lg text-center">
              <p className="text-gray-700 font-semibold">Parking</p>
              <p className="text-xl font-bold">Yes</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="neumorphism p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Contact the Owner</h3>
          <p className="text-gray-700 mt-2">
            Name: <span className="font-bold">Test Person</span>
          </p>
          <p className="text-gray-700 mt-1">
            Email: <span className="font-bold">test@example.com</span>
          </p>
          <p className="text-gray-700 mt-1">
            Phone: <span className="font-bold">+123 456 7890</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button className="px-6 py-2 rounded-md neumorphism bg-[#e0e5ec] text-gray-700 hover:shadow-lg transition-all">
            Send Message
          </button>
          <button className="px-6 py-2 rounded-md neumorphism bg-[#e0e5ec] text-gray-700 hover:shadow-lg transition-all">
            Save to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
