import axios from 'axios';

export async function register(userData) {
    const url = `${import.meta.env.VITE_API_URL}/users/register`

    try {
        const res = await axios.post(url, userData)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}