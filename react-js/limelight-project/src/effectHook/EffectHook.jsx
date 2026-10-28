import React, { useEffect, useState } from 'react'
import img from "../assets/images/blog1.jpg"
const EffectHook = () => {
    const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a3e3e2d1c8ea493d8f3c77fe4a68724d"
    const [data, setData] = useState([])
    const handleApi = async () => {
        const response = await fetch(url)
        const result = await response.json(response)
        setData(result?.articles)
        console.log("response = ", response)
        console.log("result = ", result)
    }

    console.log("data = ", data)
    useEffect(() => {
        handleApi()
    }, [])
    //   componet life cycle 
    // => initialization
    // => mount 
    // => updation
    // => unmount

    const newData = [...data];
    const limitWords = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : text;
    };
    return (
        <>

            <div><h1 className='text-center'>EffectHook {data?.length}</h1></div>


            <div className="grid grid-cols-3 gap-4">
                {
                    data?.map((item, index) => (
                        <div className="w-full h-full mx-auto mt-6 p-4 shadow-lg rounded-xl border ">
                            <img
                                src={item?.urlToImage ? item?.urlToImage : img}
                                alt="news"
                                className="rounded-lg w-full h-48 object-cover"
                            />

                            <h2 className="text-xl font-semibold mt-3">
                                {limitWords(item?.title , 3)}
                            </h2>

                            <p className="text-gray-600 mt-2">
                                {limitWords(item?.description , 5)}
                            </p>

                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={() => {
                                newData?.splice(index, 1);
                                setData(newData)
                            }}>
                                delete
                            </button>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default EffectHook;


// api => appliaction  programming inteface => json data
// {
//     name:'ali'
// }