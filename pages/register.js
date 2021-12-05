import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail, MdPassword, MdVisibility, MdVisibilityOff } from 'react-icons/md'

const url = 'https://wpeverest.com/blog/wp-content/uploads/2019/09/User-Registration-1.7.0-New-Field-Icons-Multi-Part-and-Style-Customizer-Add-ons.png'
const register = () => {

    const [visibility, setVisibility] = useState(false)
    const handle = () => {
        setVisibility(!visibility)
    }
    return (
        <div className="flex justify-center items-center bg-gray-100 py-8 space-x-3
        w-full h-full drop-shadow-2xl">

            <div className="flex flex-col bg-gray-700 py-4 px-20 justify-center items-start
                space-y-9 shadow-2xl">
                <div className="flex justify-center items-center space-x-5 border p-2 border-gray-500
                border-opacity-50 rounded-lg" >
                    <FaUserAlt color="gray"
                        onMouseOver={({ target }) => target.style.color = 'white'}
                        onMouseOut={({ target }) => target.style.color = 'gray'}
                    />
                    <input placeholder="Fullname"
                        className="bg-transparent font-normal text-gray-400 text-opacity-80 outline-none"
                    />
                </div>
                <div className="flex justify-center items-center space-x-5 border p-2 border-gray-500
                border-opacity-50 rounded-lg">
                    <MdEmail color="gray"
                        onMouseOver={({ target }) => target.style.color = 'white'}
                        onMouseOut={({ target }) => target.style.color = 'gray'}
                    />
                    <input placeholder="Email"
                        className="bg-transparent font-normal text-gray-400 text-opacity-80 outline-none"
                    />
                </div>
                <div className="flex justify-center items-center space-x-5 border p-2 border-gray-500
                border-opacity-50 rounded-lg">
                    <FaUserAlt color="gray"
                        onMouseOver={({ target }) => target.style.color = 'white'}
                        onMouseOut={({ target }) => target.style.color = 'gray'}
                    />
                    <input placeholder="Username"
                        className="bg-transparent font-normal text-gray-400 text-opacity-80 outline-none"
                    />
                </div>
                <div className="flex justify-center items-center space-x-5 border p-2 border-gray-500
                border-opacity-50 rounded-lg">
                    <div className="flex flex-row justify-center items-center space-x-5">
                        <MdPassword color="gray"
                            onMouseOver={({ target }) => target.style.color = 'white'}
                            onMouseOut={({ target }) => target.style.color = 'gray'}
                        />
                        <input placeholder="Password" type="password"
                            className="bg-transparent font-normal text-gray-400 text-opacity-80 outline-none"
                        />
                    </div>
                    {visibility ? <MdVisibility color="gray" size="1.3rem"
                        onMouseOver={({ target }) => target.style.color = 'white'}
                        onMouseOut={({ target }) => target.style.color = 'gray'}
                        onClick={handle}
                    />
                        : <MdVisibilityOff color="gray" size="1.3rem"
                            onMouseOver={({ target }) => target.style.color = 'white'}
                            onMouseOut={({ target }) => target.style.color = 'gray'}
                            onClick={handle}
                        />}
                </div>
                <div className="flex justify-center items-center space-x-5 border p-2 border-gray-500
                border-opacity-50 rounded-lg">
                    <div className="flex flex-row justify-center items-center space-x-5">
                        <MdPassword color="gray"
                            onMouseOver={({ target }) => target.style.color = 'white'}
                            onMouseOut={({ target }) => target.style.color = 'gray'}
                        />
                        <input placeholder="Repeat password" type="password"
                            className="bg-transparent font-normal text-gray-400 text-opacity-80 outline-none"
                        />
                    </div>
                    {visibility ? <MdVisibility color="gray" size="1.3rem"
                        onMouseOver={({ target }) => target.style.color = 'white'}
                        onMouseOut={({ target }) => target.style.color = 'gray'}
                        onClick={handle}
                    />
                        : <MdVisibilityOff color="gray" size="1.3rem"
                            onMouseOver={({ target }) => target.style.color = 'white'}
                            onMouseOut={({ target }) => target.style.color = 'gray'}
                            onClick={handle}
                        />}
                </div>
                <div className="flex justify-center items-center px-10 py-3 space-x-4 bg-gray-400
                                    rounded hover:bg-gray-300">
                    <button className="font-base uppercase text-gray-700 flex">
                        Sign in
                    </button>
                </div>
            </div>

            <div className="flex  flex-col space-y-2 bg-transparent p-8 shadow-2xl justify-center items-center">
                <h1 className="font-bold text-2xl text-gray-500">Register</h1>
                <div className="flex bg-gray-600 p-6">
                    <div className="flex bg-gray-500 p-2 shadow-2xl justify-center
            items-center"
                    >
                        <img width="600" height="600" src={url} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register
