import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomSeekerDetails = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [roomType, setRoomType] = useState("");
  const [smoking, setSmoking] = useState("");
  const [drinking, setDrinking] = useState("");
  const [pets, setPets] = useState("");
  const [diet, setDiet] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [notes, setNotes] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handleProfilePictureUpload = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect the form data
    const formData = {
      name,
      age,
      gender,
      email,
      contact,
      location,
      budget,
      moveInDate,
      roomType,
      smoking,
      drinking,
      pets,
      diet,
      hobbies,
      occupation,
      workingHours,
      notes,
      profilePicture,
    };
    console.log(formData);
    navigate("/"); // Redirect after submission
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
      <div className="bg-[#e8e8e8] w-[95%] max-w-5xl p-6 rounded-2xl shadow-xl neumorphism flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Room Seeker Details
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Basic Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            />
          </div>

          {/* Room Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Preferred Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            />
            <input
              type="number"
              placeholder="Budget (per month)"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            />
            <input
              type="date"
              placeholder="Move-in Date"
              value={moveInDate}
              onChange={(e) => setMoveInDate(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            />
            <input
              type="text"
              placeholder="Room Type (e.g., Shared, Single)"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            />
          </div>

          {/* Lifestyle Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              value={smoking}
              onChange={(e) => setSmoking(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            >
              <option value="" disabled>
                Smoking Preference
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select
              value={drinking}
              onChange={(e) => setDrinking(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            >
              <option value="" disabled>
                Drinking Preference
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select
              value={pets}
              onChange={(e) => setPets(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            >
              <option value="" disabled>
                Comfortable with Pets
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            >
              <option value="" disabled>
                Diet Preference
              </option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Eggetarian">Eggetarian</option>
            </select>
          </div>

          {/* Personal Interests */}
          <textarea
            placeholder="Hobbies (e.g., reading, sports)"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
          />
          <textarea
            placeholder="Additional Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
          />

          {/* Profile Picture Upload */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureUpload}
              className="w-full bg-[#e0e5ec] text-[#222] p-3 rounded-md shadow-md"
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

export default RoomSeekerDetails;
