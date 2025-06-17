// controllers/auth.controller.js

import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { generateAccessAndRefreshTokens } from "../utils/helper.js";
import jwt from 'jsonwebtoken';

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role, mobileNumber, gender } = req.body;
    console.log(name, email, password, role, mobileNumber, gender);
    // Basic validations
    if (!name || !email || !password || !role || !mobileNumber || !gender) {
        throw new ApiError(400, "All fields are required (name, email, password, role, mobileNumber, gender)");
    }

    // Check if user already exists
    const existingUser = await User.findOne({
        $or: [{ email }, { mobileNumber }]
    });

    if (existingUser) {
        throw new ApiError(409, "User already exists with this email or mobile number");
    }

    const contactInfo = { phone: mobileNumber, address: "" };

    // Create new user
    const newUser = await User.create({ name, email, password, role, gender, contactInfo });

    // Generate tokens using model method
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(newUser._id);

    const userData = {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        gender: newUser.gender,
        contactInfo: newUser.contactInfo
    };

    const options = {
        httpOnly: true,
        secure: true
    };

    // Send response
    return res
        .status(201)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(201, "User registered successfully", {
            user: userData,
            accessToken
        }));
});


// controllers/auth.controller.js

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
        throw new ApiError(400, "Both email and password are required");
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(401, "Invalid email or password");
    }

    // Verify password
    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
        throw new ApiError(401, "Invalid email or password");
    }

    // Generate tokens using model method
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    // Extract public user data
    const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const cookieOptions = {
        httpOnly: true,
        secure: true, // set to true in production (HTTPS)
        sameSite: "None" // useful for cross-site requests
    };

    // Send response with refreshToken in cookie
    return res
        .status(200)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(new ApiResponse(200, "Login successful", {
            user: userData,
            accessToken
        }));
});


export const getCurrentUser = asyncHandler(async (req, res) => {
    const user = req.user;

    // No need to query DB again since middleware already validated user and stripped sensitive info
    return res
        .status(200)
        .json(new ApiResponse(200, "User fetched successfully", user));
});

export const logoutUser = asyncHandler(async (req, res) => {
    // console.log(req.user);
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: { refreshToken: undefined }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User Logged Out"))
})

export const refreshAccessToken = asyncHandler(async (req, res, next) => {
    const incomingRefreshToken = req?.cookies?.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized access")
    }
    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id);

        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }

        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used.")
        }

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshTokens(user?._id);

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .status(200)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    { accessToken: newAccessToken },
                    "Access token Refreshed"
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Refresh Token")
    }
})

