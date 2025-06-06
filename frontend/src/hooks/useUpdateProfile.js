import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRooms } from "../features/roomSlice";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";

const useUpdateUserProfile = (filters = {}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateUserProfile = async (id, formData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.put(`/users/${id}`, formData);
            return response?.data?.data;
        } catch (err) {
            toast.error("Failed to update user data");
            setError(err.message || "Error updating user data");
        } finally {
            setLoading(false);
        }
    };


    return { loading, error, updateUserProfile };
};

export default useUpdateUserProfile;
