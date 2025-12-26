"use client"
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated,setGenerated] = useState(false)

     const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));
    }



    return (
        <div className="mx-auto max-w-lg my-20 p-8 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 shadow-xl">
            <h1 className="font-extrabold text-3xl text-purple-800 mb-6 text-center">
                Generate Short URLs
            </h1>

            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    value={url}
                    className="px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    placeholder="Enter your URL"
                    onChange={e =>{seturl(e.target.value)}}/>

                <input
                    type="text"
                    value={shorturl}
                    className="px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    placeholder="Enter your preferred short URL text"
                    onChange={e =>{setshorturl(e.target.value)}}/>

                <button onClick={generate} className="mt-2 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-lg shadow-md px-4 py-3 font-bold text-white">
                    Generate
                </button>
            </div>
            
              {generated && <> <span className='font-bold text-lg'>Your Link  </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}
        </div>
    )
}

export default Shorten
