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

// Generate Indian-style phone number (starts with 6-9, 10 digits)
const generatePhoneNumber = () => {
    const startDigits = ["6", "7", "8", "9"];
    let number = "+91" + faker.helpers.arrayElement(startDigits);
    for (let i = 0; i < 9; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number;
};

// Generate sample users
const generateUsers = async (count = 50) => {
    const users = [];

    for (let i = 0; i < count; i++) {
        const role = i % 2 === 0 ? "owner" : "seeker";

        const firstName = faker.person.firstName('male'); // Indian-style common
        const lastName = faker.person.lastName();
        const fullName = `${firstName} ${lastName}`;
        const email = `${firstName.toLowerCase()}@example.com`;
        const rawPassword = `${firstName}@123`;
        const hashedPassword = await bcrypt.hash(rawPassword, 10);

        if(!users.some(user => user.email == email)){
            users.push({
                name: fullName,
                email,
                contactInfo: {
                    phone: generatePhoneNumber(),
                    address: ""
                },
                password: hashedPassword,
                role
            });
        }else{
            i--;
        }
        
    }

    const createdUsers = await User.insertMany(users);
    return createdUsers;
};

// Generate sample rooms
const generateRooms = async (owners, count = 100) => {
    const types = ["pg", "apartment", "house", "1bhk", "2bhk", "3bhk"];
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

// Run Seeder
const seedDatabase = async () => {
    mongoose.connection.once("open", async () => {
        console.log("✅ MongoDB connected");

        try {
            console.log("Clearing existing data...");
            await User.deleteMany();
            await Room.deleteMany();

            console.log("Generating users...");
            const users = await generateUsers(50);
            const owners = users.filter(user => user.role === "owner");

            console.log("Generating rooms...");
            await generateRooms(owners, 100);

            console.log("Seeding completed ✅");
            process.exit(0);
        } catch (err) {
            console.error("Seeding failed ❌", err);
            process.exit(1);
        }
    });

    mongoose.connection.on("error", (err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    });

};

seedDatabase();
