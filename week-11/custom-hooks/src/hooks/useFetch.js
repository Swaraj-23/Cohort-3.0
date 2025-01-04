import { useEffect, useState } from "react";

export function useFetch(url)
{
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails()
    {
        setLoading(true);
        const data = await fetch(url);
        const json = await data.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(()=>{
        getDetails();
    },[url])

    useEffect(()=>{
        const clock = setInterval(getDetails, 10*1000)
        return () => clearInterval(clock);
    },[])

    return {
        finalData,
        loading
    }
}