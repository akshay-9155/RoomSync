// scripts/seed.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import { User } from "../models/user.model.js";
import { Room } from "../models/room.model.js";
import bcrypt from "bcrypt";

// Load env vars
dotenv.config();

// Connect to DB
mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/roomsync")
    .then(() => console.log("DB connected"))
    .catch((err) => {
        console.error("DB connection error:", err);
        process.exit(1);
    });

// Generate sample users
const generateUsers = async (count = 50) => {
    const users = [];
    const hashedPassword = await bcrypt.hash("Password123", 10);

    for (let i = 0; i < count; i++) {
        const role = i % 2 === 0 ? "owner" : "seeker";

        users.push({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: hashedPassword,
            role
        });
    }

    const createdUsers = await User.insertMany(users);
    return createdUsers;
};

// Generate sample rooms
const generateRooms = async (owners, count = 100) => {
    const types = ["PG", "Apartment", "House", "1BHK", "2BHK", "3BHK"];
    const rooms = [];

    for (let i = 0; i < count; i++) {
        const randomOwner = faker.helpers.arrayElement(owners);
        rooms.push({
            ownerId: randomOwner._id,
            title: faker.company.catchPhrase(),
            description: faker.lorem.paragraph(),
            location: faker.location.city(),
            rent: faker.number.int({ min: 3000, max: 30000 }),
            type: faker.helpers.arrayElement(types),
            facilities: faker.helpers.arrayElements(["WiFi", "Laundry", "Parking", "AC", "Kitchen"], 3),
            photos: [faker.image.url(), faker.image.url()],
            availability: faker.datatype.boolean()
        });
    }

    await Room.insertMany(rooms);
};

const seedDatabase = async () => {
    try {
        console.log("Clearing existing data...");
        await User.deleteMany();
        await Room.deleteMany();

        console.log("Generating users...");
        const users = await generateUsers(50); // 25 seekers, 25 owners
        const owners = users.filter(user => user.role === "owner");

        console.log("Generating rooms...");
        await generateRooms(owners, 100);

        console.log("Seeding completed ✅");
        process.exit(0);
    } catch (err) {
        console.error("Seeding failed ❌", err);
        process.exit(1);
    }
};

seedDatabase();
