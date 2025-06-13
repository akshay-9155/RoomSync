import { Room } from "../models/room.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

// @desc    Create a new room listing
export const createRoom = asyncHandler(async (req, res) => {
    const { title, description, location, rent, type, facilities, photos, availability } = req.body;

    if (!title || !location || !rent || !type) {
        throw new ApiError(400, "Required fields: title, location, rent, type");
    }

    const newRoom = await Room.create({
        ownerId: req.user._id,
        title,
        description,
        location,
        rent,
        type,
        facilities,
        photos,
        availability
    });

    return res
        .status(201)
        .json(new ApiResponse(201, "Room listed successfully", newRoom));
});

// @desc    Get all rooms (with optional filters)
export const getAllRooms = asyncHandler(async (req, res) => {
    const filters = {};

    const { location, type, minRent, maxRent, availability, facilities, userId } = req.query;

    if (location) filters.location = new RegExp(location, "i");
    if (type) filters.type = type;
    if (availability !== undefined) filters.availability = availability === "true";

    if (minRent || maxRent) {
        filters.rent = {};
        if (minRent) filters.rent.$gte = Number(minRent);
        if (maxRent) filters.rent.$lte = Number(maxRent);
    }

    if (facilities) {
        const facilitiesArray = facilities.split(",");
        filters.facilities = { $all: facilitiesArray };
    }

    if (userId) {
        filters.ownerId = userId;
    }

    const rooms = await Room.find(filters).populate("ownerId", "name email");

    return res
        .status(200)
        .json(new ApiResponse(200, "Rooms fetched successfully", rooms));
});


// @desc    Get room by ID
export const getRoomById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const room = await Room.findById(id).populate("ownerId", "name email");
    if (!room) {
        throw new ApiError(404, "Room not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Room details fetched successfully", room));
});

// @desc    Update room (only owner or admin)
export const updateRoom = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const room = await Room.findById(id);
    if (!room) {
        throw new ApiError(404, "Room not found");
    }

    if (req.user._id.toString() !== room.ownerId.toString() && req.user.role !== "admin") {
        throw new ApiError(403, "You are not authorized to update this room");
    }

    const allowedUpdates = [
        "title", "description", "location", "rent",
        "type", "facilities", "photos", "availability"
    ];

    allowedUpdates.forEach((key) => {
        if (req.body[key] !== undefined) {
            room[key] = req.body[key];
        }
    });

    await room.save();

    return res
        .status(200)
        .json(new ApiResponse(200, "Room updated successfully", room));
});

// @desc    Delete room (only owner or admin)
export const deleteRoom = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const room = await Room.findById(id);
    if (!room) {
        throw new ApiError(404, "Room not found");
    }

    if (req.user._id.toString() !== room.ownerId.toString() && req.user.role !== "admin") {
        throw new ApiError(403, "You are not authorized to delete this room");
    }

    await room.deleteOne();

    return res
        .status(200)
        .json(new ApiResponse(200, "Room deleted successfully"));
});
