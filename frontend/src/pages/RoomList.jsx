import React, { useState } from "react";
import { useSelector } from "react-redux";
import useGetRoomList from "../hooks/useGetRoomList";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Pagination,
} from "@mui/material";

const roomTypes = [
  "PG",
  "Apartment",
  "House",
  "1BHK",
  "2BHK",
  "3BHK",
  "Others",
  "All"
];
const facilitiesList = ["WiFi", "AC", "Laundry", "Parking", "Meals", "Kitchen"];

const RoomList = () => {
  const { rooms } = useSelector((state) => state.rooms);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 6;

  useGetRoomList(filters);

  const handleChange = (field) => (e) => {
    setFilters((prev) => ({ ...prev, [field]: e.target.value }));
    setCurrentPage(1);
  };

  const handleCheckboxChange = (facility) => (e) => {
    setFilters((prev) => {
      const selected = prev.facilities?.split(",") || [];
      const updated = e.target.checked
        ? [...selected, facility]
        : selected.filter((f) => f !== facility);
      return { ...prev, facilities: updated.join(",") };
    });
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const pageCount = Math.ceil(rooms.length / roomsPerPage);

  return (
    <div className="p-6">
      <div className="bg-[#e8e8e8] p-6 rounded-2xl shadow-inner flex flex-col gap-6 mb-8">
        <h2 className="text-2xl font-semibold">Filter Rooms</h2>
        <div className="flex flex-wrap gap-4 justify-between">
          <TextField
            label="Location"
            variant="outlined"
            value={filters.location || ""}
            onChange={handleChange("location")}
            className="w-full lg:w-[19%]"
          />

          <FormControl className="w-[45%] lg:w-[19%]">
            <InputLabel>Type</InputLabel>
            <Select
              value={filters.type || ""}
              onChange={handleChange("type")}
              label="Type"
              sx={{ minWidth: 120 }}
            >
              {roomTypes.map((type) => (
                <MenuItem
                  key={type}
                  value={type == "All" ? "" : type.toLowerCase()}
                >
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="w-[45%] lg:w-[19%]">
            <InputLabel>Availability</InputLabel>
            <Select
              value={filters.availability ?? ""}
              onChange={handleChange("availability")}
              label="Availability"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="true">Available</MenuItem>
              <MenuItem value="false">Unavailable</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Min Rent"
            type="number"
            value={filters.minRent || ""}
            onChange={handleChange("minRent")}
            className="w-[45%] lg:w-[19%]"
          />

          <TextField
            label="Max Rent"
            type="number"
            value={filters.maxRent || ""}
            onChange={handleChange("maxRent")}
            className="w-[45%] lg:w-[19%]"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {facilitiesList.map((facility) => (
            <FormControlLabel
              key={facility}
              control={
                <Checkbox
                  checked={filters.facilities?.includes(facility) || false}
                  onChange={handleCheckboxChange(facility)}
                />
              }
              label={facility}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentRooms.map((room) => (
          <div
            key={room._id}
            className="bg-[#e0e5ec] rounded-2xl p-5 shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-xl neumorphism cursor-pointer"
          >
            {/* Room Info */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">
              {room.title}
            </h3>
            <div className="flex gap-4 justify-between items-center">
              {/* Room Image */}
              <div className=" w-[40%] h-48 rounded-xl overflow-hidden mb-4 shadow-lg transition-transform transform hover:scale-[1.05] hover:shadow-xl">
                <img
                  src={
                    room.photos[0] ||
                    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg"
                  }
                  alt={room.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className=" w-[50%]">
                <p className="text-gray-600 mb-1">{room.location}</p>
                <p className="text-indigo-600 font-bold mb-1">
                  ₹{room.rent} / month
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {room.type.toUpperCase()}
                </p>

                {/* Facilities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.facilities.map((facility, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#f0f3f7] text-gray-700 rounded-full text-xs shadow-sm"
                    >
                      {facility}
                    </span>
                  ))}
                </div>

                {/* Owner Info */}
                <div className="text-sm text-gray-500">
                  <p className="font-medium">
                    Owner:{" "}
                    <span className="text-gray-700">{room.ownerId?.name}</span>
                  </p>
                  <p>{room.ownerId?.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            shape="rounded"
            color="primary"
          />
        </div>
      )}
    </div>
  );
};

export default RoomList;
