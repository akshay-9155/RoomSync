// routes/room.route.js

import { Router } from "express";
import {
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
} from "../controllers/room.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const roomRouter = Router();

// @route   POST /api/rooms
// @desc    Create a new room listing
// @access  Private (Room Owners)
roomRouter.post("/", authenticate, createRoom);

// @route   GET /api/rooms
// @desc    Get all rooms with filters (public access)
// @access  Public
roomRouter.get("/", getAllRooms);

// @route   GET /api/rooms/:id
// @desc    Get room details by ID
// @access  Public
roomRouter.get("/:id", getRoomById);

// @route   PUT /api/rooms/:id
// @desc    Update room listing (only owner or admin)
// @access  Private
roomRouter.put("/:id", authenticate, updateRoom);

// @route   DELETE /api/rooms/:id
// @desc    Delete room listing
// @access  Private
roomRouter.delete("/:id", authenticate, deleteRoom);

export default roomRouter;
