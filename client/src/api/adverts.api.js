import axios from './axios';

export async function postRequest(advertData) {
    const url = '/adverts/advert'

    try {
        const res = await axios.post(url, advertData)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}

export async function getRequestById(id) {
    const url = `/adverts/adverts/${id}`

    try {
        const res = await axios.get(url)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}