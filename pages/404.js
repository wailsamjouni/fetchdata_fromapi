import React, { useEffect, useState } from 'react'
import { ImSad } from 'react-icons/im';
import { GiReturnArrow } from 'react-icons/gi'
import { RiEmotionSadFill } from 'react-icons/ri'

const ErorrHandle = () => {

    const [change, setChange] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setChange(!change)
        }, 1500)
    })

    return (
        <div className="flex flex-row justify-center items-center bg-gray-100 space-x-40
                        w-screen h-screen">
            <div className="flex flex-col font-bold font-sans text-xl italic space-y-3">
                <h1 className="">Sorry we can not find this page</h1>
                <h3 className="tracking-wider not-italic uppercase text-sm font-normal opacity-50"
                >Click the button below to display the home page</h3>
                <div className="flex flex-col justify-center items-center opacity-50 hover:opacity-80">
                    <div className="flex p-2 bg-gray-400 rounded-full justify-center items-center">
                        {change ? <ImSad className="bg-gray-300 p-1 rounded-full" size="14rem" color="black" />
                            : <RiEmotionSadFill className="bg-gray-300 p-1 rounded-full" size="14rem" color="black" />}


                    </div>
                </div>
            </div>
            <div>
                <button className="flex justify-center items-center px-10 py-3 space-x-4 bg-gray-400
                                    rounded hover:bg-gray-200">
                    <GiReturnArrow size="1.5rem" />
                    <h4>Return</h4>

                </button>
            </div>
        </div>
    )
}

export default ErorrHandle
