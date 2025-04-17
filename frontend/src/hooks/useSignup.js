import { useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance, { setAccessToken } from "../utils/axiosInstance.jsx";
import { setUser } from "../features/authSlice";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const signup = async ({ name, email, password, role, mobileNumber }) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post("/auth/register", {
                name,
                email,
                password,
                role,
                mobileNumber,
            });

            const { accessToken, user } = response.data.data;

            // Set access token in memory
            setAccessToken(accessToken);

            // Update Redux state
            dispatch(setUser(user));

            // toast.success("Signup successful!");

            role == "owner" ? toast.success("Signup successful!") : toast.success("Please fill in these details for better results!", {
                icon: 'ℹ️',
                duration: 5000
            });

            return { success: true };
        } catch (err) {
            console.error("Signup error:", err);
            toast.error(err.response?.data?.message || "Signup failed");
            setError(err.response?.data?.message || "Signup failed");
            return { success: false };
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading, error };
};

export default useSignup;
