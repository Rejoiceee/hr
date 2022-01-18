import { useState, useEffect } from "react";


const useFetch = (fetchParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try{
            await fetch(params.url)
                    .then((res) => res.json())
                    .then((json) => setResponse(json));
        }catch(error){
            setError(error);
        }finally{
            // ??????????? ?????? timeout ??????
           // setTimeout(() => {
                setLoading(false);
           // }, 1000);
        }
    }

    useEffect(()=>{
        fetchData(fetchParams);
    }, [fetchParams.target]);

    return {response, error, loading};
}


export default useFetch;