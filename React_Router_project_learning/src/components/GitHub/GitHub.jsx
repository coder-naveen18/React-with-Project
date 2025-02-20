// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function GitHub(){

    const data = useLoaderData()

    // const [data , setData] = useState("")

    // useEffect(()=>{
    //         fetch('https://api.github.com/users/hiteshchoudhary').then((res)=> res.json()).then((data)=>{
    //             setData(data)
    //         })
    // }, [])


    return (
        <div className="text-cneter m-4 bg-gray-500 text-white p-4 text-3xl"  >Github Followers : {data.followers}
        <img src={data.avatar_url} alt="git Picture" width={250} height={250} />
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}