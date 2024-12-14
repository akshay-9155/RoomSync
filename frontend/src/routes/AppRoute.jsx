import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import RoomList from "../pages/RoomList";
import RoomDetails from "../pages/RoomDetails";
import Chat from "../pages/Chat";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";
import RoomSeekerDetails from "../pages/RoomSeekerDetails";
import RoomOwnerDetails from "../pages/RoomOwnerDetails";

const AppRoutes = () => {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Navbar />
      <main className=" h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/roomseekerdetails" element={<RoomSeekerDetails />} />
          <Route path="/roomownerdetails" element={<RoomOwnerDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
