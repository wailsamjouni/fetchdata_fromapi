import React from 'react'
import { FaGithub, FaGoogle, FaFacebook, FaLinkedin, FaUserAlt, FaSignInAlt } from 'react-icons/fa'
import { MdEmail, MdPassword } from 'react-icons/md'
const register = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100
        w-screen h-screen">

            <div className="flex flex-col justify-center items-center bg-gray-300 py-48 px-7 space-y-7">
                <h1 className="font-bold text-5xl text-gray-700">
                    Welcome back!
                </h1>
                <h4 className="font-normal text-base text-gray-500">
                    You have to fill out the form below to register
                </h4>
                <div className="flex justify-center items-center px-10 py-3 space-x-4 bg-gray-200
                                    rounded hover:bg-gray-100">
                    <FaSignInAlt size="1.5rem" color="gray" />
                    <button className="font-base uppercase text-gray-700">
                        Sign in
                    </button>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center bg-gray-500 px-16 py-16 space-y-24">
                <div className="flex flex-col space-y-3">
                    <h1 className="font-bold text-3xl text-gray-300">
                        Create Account
                    </h1>
                    <div className="flex justify-center items-center space-x-2">
                        <FaGithub color="#333" size="1.5rem" />
                        <FaGoogle color="#DB4437" size="1.5rem" />
                        <FaFacebook color="#4267B2" size="1.5rem" />
                        <FaLinkedin color="#2867B2" size="1.5rem" />
                    </div>
                </div>

                <div className="flex flex-col bg-gray-700 p-4 justify-center items-center
                space-y-2 rounded-md">
                    <h2 className="font-bold text-gray-400 text-opacity-80">Form</h2>
                    <div className="flex justify-center items-center space-x-3">
                        <FaUserAlt color="gray" />
                        <input placeholder="Name"
                            className="bg-transparent font-normal text-gray-400 text-opacity-80"
                        />
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                        <MdEmail color="gray" />
                        <input placeholder="Email"
                            className="bg-transparent font-normal text-gray-400 text-opacity-80"
                        />
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                        <MdPassword color="gray" />
                        <input placeholder="Password"
                            className="bg-transparent font-normal text-gray-400 text-opacity-80"
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

export default register
