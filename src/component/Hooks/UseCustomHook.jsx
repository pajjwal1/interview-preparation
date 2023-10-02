import { useEffect, useState } from 'react'

const UseCustomHook = (url) =>{
    const[value, setValue] = useState([]);
    const[isError, setIsError] = useState(false);
    const[isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        try{
        const fetchData = async () =>{
            const response = await fetch(url);
            if(response.status === 200){
                const data = await response.json();
                setValue(data);
                setIsLoading(false);
            }
        }
        fetchData()
    }
    catch(e){
        setIsError(true);
        setIsLoading(false);
    }
    },[url])
    return {value, isError, isLoading}
}

export default UseCustomHook