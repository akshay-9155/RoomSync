import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { validateObjectId } from "../utils/helper.js";

// @desc    Get user profile by ID
export const getUserProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!validateObjectId(id)){
        throw new ApiError(400, "Invalid user ID format");
    }

    const user = await User.findById(id).select("-password -refreshToken");
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "User profile fetched successfully", user));
});

// @desc    Update user profile
export const updateUserProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!validateObjectId(id)) {
        throw new ApiError(400, "Invalid user ID format");
    }
    // Allow only the user themselves or admins to update
    if (req.user._id.toString() !== id && req.user.role !== "admin") {
        throw new ApiError(403, "You are not authorized to update this profile");
    }

    const allowedUpdates = ["name", "age", "profession", "lifestyle", "roommatePreferences", "interests", "hobbies", "contactInfo"];
    const updates = {};

    for (const key of allowedUpdates) {
        if (req.body[key] !== undefined) {
            updates[key] = req.body[key];
        }
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
        select: "-password -refreshToken"
    });

    if (!updatedUser) {
        throw new ApiError(404, "User not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "User profile updated successfully", updatedUser));
});

// @desc    Delete user account
export const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!validateObjectId(id)) {
        throw new ApiError(400, "Invalid user ID format");
    }
    // Allow only the user themselves or admins to delete
    if (req.user._id.toString() !== id && req.user.role !== "admin") {
        throw new ApiError(403, "You are not authorized to delete this account");
    }

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
        throw new ApiError(404, "User not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "User deleted successfully"));
});
