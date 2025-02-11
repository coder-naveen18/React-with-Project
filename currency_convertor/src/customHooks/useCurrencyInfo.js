import { useState, useEffect } from "react";

// custom hook that will use the useState and useEffect

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))

        console.log(data)
        
    }, [currency])
    
    console.log(data)
    return data
}

export default useCurrencyInfo;