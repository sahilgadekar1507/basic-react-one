import React, { useEffect, useState } from 'react'
import { data, useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/sahilgadekar1507')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='text-center bg-gray-600 text-white'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="prof_pic" /></div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/sahilgadekar1507');
  return response.json();
}
