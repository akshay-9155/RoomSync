import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
    {
        ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        title: { type: String, required: true },
        description: { type: String },
        location: { type: String, required: true },
        rent: { type: Number, required: true },
        type: { type: String, enum: ["pg", "apartment", "house", "1bhk", "2bhk", "3bhk", "others"], required: true },
        facilities: [String],
        photos: [String],
        availability: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export const Room = mongoose.model("Room", RoomSchema);
