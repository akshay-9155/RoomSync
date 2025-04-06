// routes/user.route.js

import { Router } from "express";
import {
    getUserProfile,
    updateUserProfile,
    deleteUser,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const userRouter = Router();

// @route   GET /api/users/:id
// @desc    Get user profile by ID
// @access  Public (or Private based on use-case)
userRouter.get("/:id", authenticate, getUserProfile);

// @route   PUT /api/users/:id
// @desc    Update user profile
// @access  Private (user or admin only)
userRouter.put("/:id", authenticate, updateUserProfile);

// @route   DELETE /api/users/:id
// @desc    Delete user account (optional feature)
// @access  Private (admin or user)
userRouter.delete("/:id", authenticate, deleteUser);

export default userRouter;
