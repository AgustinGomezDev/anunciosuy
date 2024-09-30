import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "./config"

export const uploadImage = async (file) => {
    try {
        const storageRef = ref(storage, `images/${file.name}`)
        const snapshot = await uploadBytes(storageRef, file)
        const downloadURL = await getDownloadURL(storageRef)
        return downloadURL
    } catch (error) {
        throw error;
    }
}