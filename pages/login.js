import React from 'react'
import { FaGithub, FaGoogle, FaFacebook, FaLinkedin, FaUserAlt, FaSignInAlt } from 'react-icons/fa'
import { MdEmail, MdPassword } from 'react-icons/md'
import Link from 'next/link'
const login = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 py-4
        w-full h-full">

            <div className="flex flex-col justify-center items-center bg-gray-300 
            rounded-tl-3xl py-48 px-7 space-y-7 shadow-2xl">
                <h1 className="font-bold text-5xl text-gray-700">
                    Welcome back!
                </h1>
                <h4 className="font-normal text-base text-gray-500">
                    You have to fill out the form below to register
                </h4>
                <div className="flex justify-center items-center px-10 py-3 space-x-4 bg-gray-200
                                    rounded hover:bg-gray-100">
                    {/* <FaSignInAlt size="1.5rem" color="gray" /> */}
                    <Link href="/register">
                        <a>
                            <button className="font-base uppercase text-gray-700">
                                Register
                            </button>
                        </a>
                    </Link>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center bg-gray-500 
            px-16 py-10 space-y-24 rounded-br-3xl shadow-2xl">
                <div className="flex flex-col space-y-3">
                    <h1 className="font-bold text-3xl text-gray-300">
                        Create Account
                    </h1>
                    <div className="flex justify-center items-center space-x-2 shadow-3xl
                     bg-gray-400 rounded-md p-2">
                        <FaGithub color="#333" size="1.5rem" style={{ cursor: 'pointer' }}
                            onMouseOver={({ target }) => target.style.color = '#f5f5f5'}
                            onMouseOut={({ target }) => target.style.color = '#333'}
                        />
                        <FaGoogle color="#DB4437" size="1.5rem" style={{ cursor: 'pointer' }}
                            onMouseOver={({ target }) => target.style.color = '#0F9D58'}
                            onMouseOut={({ target }) => target.style.color = '#DB4437'}
                        />
                        <FaFacebook color="#4267B2" size="1.5rem" style={{ cursor: 'pointer' }}
                            onMouseOver={({ target }) => target.style.color = '#898F9C'}
                            onMouseOut={({ target }) => target.style.color = '#4267B2'}
                        />
                        <FaLinkedin color="#2867B2" size="1.5rem" style={{ cursor: 'pointer' }}
                            onMouseOver={({ target }) => target.style.color = '#00ADDC'}
                            onMouseOut={({ target }) => target.style.color = '#2867B2'}
                        />
                    </div>
                </div>

                <div className="flex flex-col bg-gray-700 p-4 justify-center items-center
                space-y-2 rounded-md shadow-2xl">
                    <h2 className="font-bold text-gray-400 text-opacity-80">Log in</h2>
                    <div className="flex justify-center items-center space-x-3 ">
                        <FaUserAlt color="gray" />
                        <input placeholder="Name"
                            className="bg-transparent font-normal text-gray-400 text-opacity-80 outline-none"
                        />
                    </div>
                    <div className="flex justify-center items-center space-x-3 ">
                        <MdEmail color="gray" />
                        <input placeholder="Email"
                            className="bg-transparent font-normal text-gray-400 text-opacity-80 outline-none"
                        />
                    </div>
                    <div className="flex justify-center items-center space-x-3 ">
                        <MdPassword color="gray" />
                        <input placeholder="Password" type="password"
                            className="bg-transparent font-normal text-gray-400 text-opacity-80 outline-none"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center px-10 py-3 space-x-4 bg-gray-400
                                    rounded hover:bg-gray-300">
                    <FaSignInAlt size="1.5rem" color="gray" />
                    <button className="font-base uppercase text-gray-700">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default login
