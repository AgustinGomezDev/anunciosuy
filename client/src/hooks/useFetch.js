import { useState } from "react"

const useFetch = (cb, options = {}) => {
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fn = async (...args) => {
        setLoading(true);
        setError(null);

        try{
            const res = await cb(...args);
            setData(res)
            setError(null)
            return { data: res, error: null, loading: false };
        }catch(error){
            setError(error)
            return { data: undefined, error, loading: false }
        }finally{
            setLoading(false)
        }
    }
    

    return { data, loading, error, fn }
}

export default useFetch