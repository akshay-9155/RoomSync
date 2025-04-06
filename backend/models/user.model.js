import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema(
    {
        role: { type: String, enum: ["seeker", "owner"], required: true },
        name: { type: String, required: true },
        gender: { type: String, enum: ["male", "female", "other"] },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: [true, 'Password is required'] },
        profilePicture: { type: String },
        age: { type: Number },
        profession: { type: String },
        lifestyle: { type: String },
        interests: [String],
        smoking: { type: Boolean },
        drinking: { type: Boolean },
        pets: { type: Boolean },
        diet: { type: String, enum: ["vegetarian", "non-vegetarian", "eggetarian"] },
        hobbies: {
            type: String
        },
        contactInfo: {
            phone: { type: String },
            address: { type: String },
        },
        refreshToken: {
            type: String,
        }
    },
    { timestamps: true }
);

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}
UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            role: this.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            role: this.role,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", UserSchema);
