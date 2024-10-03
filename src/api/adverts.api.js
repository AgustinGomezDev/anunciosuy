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

export async function getRequest(query) {
    const queryParams = Object.entries(query)
        .filter(([key, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')

    const url = queryParams ? `/adverts/adverts?${queryParams}` : '/adverts/adverts';

    try {
        const res = await axios.get(url)
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

export async function getAdvertsByUserId(id) {
    const url = `/adverts/adverts/userId/${id}`

    try {
        const res = await axios.get(url)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}

export async function updateAdvert(id, updatedAdvert) {
    const url = `/adverts/advert/${id}`

    try {
        const res = await axios.put(url, updatedAdvert)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}

export async function deleteAdvert(id) {
    const url = `/adverts/advert/${id}`

    try {
        const res = await axios.delete(url)
        return res
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
}