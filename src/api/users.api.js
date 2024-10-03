import axios from './axios';

export async function registerRequest(userData) {
    const url = '/users/register'

    try {
        const res = await axios.post(url, userData)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}

export async function loginRequest(userData) {
    const url = '/users/login'

    try {
        const res = await axios.post(url, userData)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}

export async function logoutRequest() {
    const url = '/users/logout'

    try {
        const res = await axios.post(url)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}

export async function verifyTokenRequest() {
    const url = '/users/current'

    try {
        const res = await axios.get(url)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}

export async function getUserById(id) {
    const url = `/users/${id}`

    try {
        const res = await axios.get(url)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}