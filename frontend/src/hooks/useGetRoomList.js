import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRooms } from "../features/roomSlice";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";

const useGetRoomList = (filters = {}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRooms = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.get("/rooms", { params: filters });
            dispatch(setRooms(response.data.data));
        } catch (err) {
            toast.error("Failed to fetch rooms");
            setError(err.message || "Error fetching rooms");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRooms();
    }, [JSON.stringify(filters)]); // Trigger on filter change

    return { loading, error };
};

export default useGetRoomList;
