import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123 456 7890",
    gender: "male",
    age: 25,
    profession: "Engineer",
    lifestyle: "Night Owl",
    diet: "non-vegetarian",
    hobbies: "Reading, Gaming",
    address: "123 Main Street, City",
  });

  const handleUpdate = () => {
    console.log("Updated User:", user);
    // TODO: Make API call to update user profile
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-gray-200 py-6">
      <div className="bg-[#e8e8e8] w-full sm:w-fit p-6 rounded-2xl shadow-xl neumorphism flex flex-col items-center">
        {/* Profile Picture */}
        <div className=" h-32 w-32 rounded-full bg-gradient-to-r from-[#d1d9e6] to-[#ffffff] shadow-inner neumorphism flex justify-center items-center">
          <img
            src=""
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
        <p className="text-gray-600 mt-1">{user.email}</p>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          {/* Name */}
          <ProfileField label="Name" value={user.name} />

          {/* Email */}
          <ProfileField label="Email" value={user.email} />

          {/* Phone */}
          <ProfileField label="Phone" value={user.phone} />

          {/* Gender */}
          <ProfileField label="Gender" value={user.gender} />

          {/* Age */}
          <ProfileField label="Age" value={user.age} />

          {/* Profession */}
          <ProfileField label="Profession" value={user.profession} />

          {/* Lifestyle */}
          <ProfileField label="Lifestyle" value={user.lifestyle} />

          {/* Diet */}
          <ProfileField label="Diet" value={user.diet} />

          {/* Hobbies */}
          <ProfileField label="Hobbies" value={user.hobbies} />

          {/* Address */}
          <ProfileField label="Address" value={user.address} />
        </div>

        <button
          onClick={handleUpdate}
          className="mt-6 px-6 py-2 rounded-md neumorphism bg-[#e0e5ec] text-gray-700 hover:shadow-lg transition-all"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div className="neumorphism w-full p-3 rounded-md flex items-center gap-3">
    <span className="text-gray-700">{label}: </span>
    <span className={`${label == "Email" ? "" : "capitalize"}`}>{value}</span>
  </div>
);

export default Profile;
