import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRooms } from "../features/roomSlice";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";

const useGetUserProfile = (filters = {}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUserProfile = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.get(`/users/${id}`, { params: filters });
            return response?.data?.data;
        } catch (err) {
            toast.error("Failed to get user data");
            setError(err.message || "Error fetching user data");
        } finally {
            setLoading(false);
        }
    };


    return { loading, error, getUserProfile };
};

export default useGetUserProfile;
