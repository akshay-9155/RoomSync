import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
    {
        ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        title: { type: String, required: true },
        description: { type: String },
        location: { type: String, required: true },
        rent: { type: Number, required: true },
        type: { type: String, enum: ["PG", "Apartment", "House", "1BHK", "2BHK", "3BHK"], required: true },
        facilities: [String],
        photos: [String],
        availability: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export const Room = mongoose.model("Room", RoomSchema);
