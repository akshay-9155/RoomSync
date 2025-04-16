import { useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosInstance.jsx";
import { setUser } from "../features/authSlice";
import { setAccessToken } from "../utils/axiosInstance.jsx";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post("/auth/login", {
                email,
                password,
            });
            console.log(response);

            const { accessToken, user } = response.data.data;

            // Set access token in memory
            setAccessToken(accessToken);

            // Update Redux state
            dispatch(setUser(user));

            return { success: true };
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response?.data?.message || "Login failed");
            return { success: false };
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useLogin;
