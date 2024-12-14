import React from "react";
import { Link } from "react-router-dom";

const RoomList = () => {
  const rooms = [
    {
      id: 1,
      title: "Cozy 1BHK in Koramangala",
      price: "₹20,000/month",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "Spacious Room in Andheri West",
      price: "₹18,000/month",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 3,
      title: "Modern Studio near MG Road, Bangalore",
      price: "₹25,000/month",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 4,
      title: "Shared 2BHK in Whitefield",
      price: "₹15,000/month",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 5,
      title: "Luxury Penthouse in South Mumbai",
      price: "₹1,00,000/month",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 6,
      title: "Affordable Room in Dwarka, Delhi",
      price: "₹10,000/month",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
      <div className="bg-[#e8e8e8] w-[90%] max-w-5xl p-6 rounded-2xl shadow-xl neumorphism flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Available Rooms
        </h2>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="neumorphism p-4 rounded-lg flex flex-col gap-4"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">{room.title}</h3>
                <p className="text-xl font-bold bg-[#e0e5ec] py-2 px-4 rounded-lg neumorphism">
                  {room.price}
                </p>
              </div>
              <Link
                to={`/room/${room.id}`}
                className="text-center bg-[#e0e5ec] py-2 px-6 rounded-md neumorphism text-gray-700 hover:shadow-lg transition-all"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomList;
