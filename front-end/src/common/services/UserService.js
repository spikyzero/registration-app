import api from "../config/axiosConfig";


export const getUsers = async () => {
    return await api.get("/api/v1/users");
};

export const createUser = async (userData) => {
    try {
        return await api.post("/api/v1/users/save", userData);
    } catch (error) {
        console.error("Error:", error);
    }
};

export const existsByEmail = async (email) => {
    return await api.get(`/api/v1/users/exists/email?email=${email}`);
};