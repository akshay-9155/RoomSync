import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrayInputField from "../components/ArrayInputField";

const ListRoom = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("");
  const [facilitiesInput, setFacilitiesInput] = useState("");
  const [facilities, setFacilities] = useState([]);
  const [photos, setPhotos] = useState("");
  const navigate = useNavigate();

  const imageArray = [
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg",
    "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
    "https://images.pexels.com/photos/271621/pexels-photo-271621.jpeg",
    "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg",
  ];


  const handleProfilePictureUpload = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const roomData = {
      title,
      description,
      type: type.toLowerCase(),
      location,
      rent: Number(rent),
      facilities: facilities.split(",").map((f) => f.trim()),
      photos: photos.split(",").map((p) => p.trim()),
    };

    console.log("Room data to submit:", roomData);
    // Send `roomData` to your backend API with auth token
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
      <div className="bg-[#e8e8e8] w-[90%] max-w-4xl p-6 rounded-2xl shadow-xl neumorphism flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center mb-6">
          List your Room
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="text"
              placeholder="Room Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Room Type */}
          <div className="neumorphism p-4 rounded-xl">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="p-3 w-full bg-[#e0e5ec] text-[#222] rounded-lg neumorphism"
            >
              <option value="" disabled>
                Select Room type
              </option>
              <option value="pg">PG</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="1bhk">1BHK</option>
              <option value="2bhk">2BHK</option>
              <option value="3bhk">3BHK</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Description */}
          <div className="neumorphism p-4 col-span-1 md:col-span-2 rounded-xl">
            <textarea
              placeholder="Room Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Location */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Rent */}
          <div className="neumorphism p-4 rounded-xl">
            <input
              type="number"
              placeholder="Rent (per month)"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              className="w-full p-3 bg-[#e0e5ec] text-[#222] border-0 rounded-md shadow-md focus:outline-none"
            />
          </div>

          {/* Facilities */}
          <div className="neumorphism col-span-1 md:col-span-2 p-4 rounded-xl">
            <ArrayInputField
              tag={facilitiesInput}
              setTag={setFacilitiesInput}
              tagArray={facilities}
              setTagArray={setFacilities}
              placeholder="Facilities (eg. WiFi, Parking, Kitchen)"
            />
          </div>

          {/* Room Photos */}
          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-4">
            {/* Upload Section */}
            <div className="neumorphism p-4 rounded-2xl md:w-[20%] flex flex-col justify-between">
              {/* Hidden File Input */}
              <input
                id="profilePicture"
                type="file"
                accept="image/*"
                onChange={handleProfilePictureUpload}
                className="hidden"
              />

              {/* Custom Styled Button */}
              <label
                htmlFor="profilePicture"
                className="cursor-pointer w-full md:min-h-[100px] md:max-h-[100px] text-center bg-gradient-to-r from-[#d1d9e6] to-[#f0f3f7] text-[#222] p-3 rounded-lg shadow-md hover:shadow-lg transition duration-200 font-medium"
              >
                Upload Room Photos
              </label>
            </div>

            {/* Preview Section */}
            <div className="w-full neumorphism p-4 rounded-2xl flex gap-4 overflow-x-auto scroll-smooth scroll-px-4 snap-x">
              {imageArray.length ? (
                imageArray.map((image, index) => (
                  <div
                    key={index}
                    className="min-h-[100px] max-h-[100px] snap-start flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={image}
                      alt={`Room ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">
                  No images uploaded yet.
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 col-span-1 md:col-span-2 bg-[#e0e5ec] text-gray-700 rounded-lg neumorphism text-center text-xl hover:shadow-lg transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListRoom;
