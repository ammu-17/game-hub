import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Gener{
    id: number;
    name: string;
}

interface FetchGenersResponse{
    count: number;
    results: Gener[]
}

const useGeneres = () => {
    const[generes,setGeneres] = useState<Gener[]>([]);
    const[error,setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {

        const controller = new AbortController

        setIsLoading(true)
        apiClient.get<FetchGenersResponse>('/genres' , {signal: controller.signal})
        .then(res=>{
            setGeneres(res.data.results);
            setIsLoading(false)
        })
        .catch(err=>{
            if (err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
        })

        return () => controller.abort()
    },[])

    return {generes,error,isLoading};
}

export default useGeneres