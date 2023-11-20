"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    let [data, setData] = useState([]);
    useEffect(()=>{
        (async()=>{
            let response = await fetch('https://restcountries.com/v3.1/all')
            let data = await response.json();
            setData(data)
        })()
    },[])
  return (
    <div>
        <h1>This is our Profile Page</h1>
        {
            data.map((item, index) => {
                return <div key={index}>
                    <h3>{item.name.common}</h3>
                    <img src={item.flags.png} />
                </div>
            })
        }
    </div>
  )
}

export default page